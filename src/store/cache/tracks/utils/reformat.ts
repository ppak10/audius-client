import { omit } from 'lodash'

import AudiusBackend from 'services/AudiusBackend'
import Track, { TrackMetadata } from 'models/Track'
import { CoverArtSizes } from 'models/common/ImageSizes'
import { getRemoteVar, StringKeys } from 'services/remote-config'
import Client from 'models/Client'
import { getClient } from 'utils/clientUtil'

const DESKTOP_APP = getClient() === Client.ELECTRON
const MOBILE_APP = process.env.REACT_APP_NATIVE_MOBILE
const IS_WEB = !(DESKTOP_APP || MOBILE_APP)

const maybeBlock = <T extends TrackMetadata>(
  track: T
): T & { _blocked?: boolean } => {
  const blockList = new Set(
    (getRemoteVar(StringKeys.CONTENT_BLOCK_LIST) || '').split(',').map(parseInt)
  )
  if (IS_WEB && blockList.has(track.track_id)) {
    return {
      ...track,
      is_delete: true,
      _blocked: true
    }
  }
  return track
}

/**
 * Adds _cover_art_sizes to a track object if it does not have one set
 */
const addTrackImages = <T extends TrackMetadata>(
  track: T
): T & { duration: number; _cover_art_sizes: CoverArtSizes } => {
  return AudiusBackend.getTrackImages(track)
}

/**
 * Potentially add
 * @param track
 */
const setIsCoSigned = <T extends TrackMetadata>(track: T) => {
  const { remix_of } = track

  const remixOfTrack = remix_of?.tracks?.[0]

  const isCoSigned =
    remixOfTrack &&
    (remixOfTrack.has_remix_author_saved ||
      remixOfTrack.has_remix_author_reposted)

  if (isCoSigned) {
    return {
      ...track,
      _co_sign: remix_of!.tracks[0]
    }
  }
  return track
}

/**
 * NOTE: This is a temporary fix for a backend bug: The field followee_saves is not defined.
 * This is a stopgap to prevent the client from erroring and should be removed after fixed.
 * The current erroneous disprov endpoint is `/feed/reposts/<userid>`
 * @param track
 */
const setDefaultFolloweeSaves = <T extends TrackMetadata>(track: T) => {
  return {
    ...track,
    followee_saves: track?.followee_saves ?? []
  }
}

/**
 * Reformats a track to be used internally within the client
 * This method should *always* be called before a track is cached.
 */
export const reformat = <T extends TrackMetadata>(track: T): Track => {
  const t = track
  const withoutUser = omit(t, 'user')
  const withImages = addTrackImages(withoutUser)
  const withCosign = setIsCoSigned(withImages)
  const withBlock = maybeBlock(withCosign)

  const withDefaultSaves = setDefaultFolloweeSaves(withBlock)
  return withDefaultSaves
}
