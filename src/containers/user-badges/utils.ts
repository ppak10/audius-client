import BN from 'bn.js'
import { ID } from 'models/common/Identifiers'
import { getAccountUser } from 'store/account/selectors'
import { getUser } from 'store/cache/users/selectors'
import { AppState } from 'store/types'
import {
  BNAudio,
  BNWei,
  getAccountBalance,
  StringAudio,
  stringAudioToBN,
  StringWei,
  stringWeiToAudioBN,
  stringWeiToBN,
  weiToAudio
} from 'store/wallet/slice'
import { createSelector } from 'reselect'
import { getAudio } from 'store/player/selectors'

export type BadgeTier = 'none' | 'bronze' | 'silver' | 'gold' | 'platinum'

const badgeTiers: { tier: BadgeTier; minAudio: BNAudio }[] = [
  {
    tier: 'platinum',
    minAudio: stringAudioToBN('100000' as StringAudio)
  },
  {
    tier: 'gold',
    minAudio: stringAudioToBN('10000' as StringAudio)
  },
  {
    tier: 'silver',
    minAudio: stringAudioToBN('1000' as StringAudio)
  },
  {
    tier: 'bronze',
    minAudio: stringAudioToBN('10' as StringAudio)
  },
  {
    tier: 'none',
    minAudio: stringAudioToBN('0' as StringAudio)
  }
]
// Selectors

export const getVerifiedForUser = (
  state: AppState,
  { userId }: { userId: ID }
) => {
  const user = getUser(state, { id: userId })
  return !!user?.is_verified
}

export const getWeiBalanceForUser = (
  state: AppState,
  { userId }: { userId: ID }
) => {
  const accountUser = getAccountUser(state)
  const user = getUser(state, { id: userId })

  const wei: StringWei = (() => {
    if (accountUser?.user_id === userId) {
      return state.wallet.balance ?? ('0' as StringWei)
    }
    return user?.balance ?? ('0' as StringWei)
  })()

  return wei
}

export const makeGetTierAndVerifiedForUser = () =>
  createSelector(
    [getWeiBalanceForUser, getVerifiedForUser],
    (wei, isVerified) => {
      const audio = stringWeiToAudioBN(wei)

      const tier =
        badgeTiers.find(t => {
          return t.minAudio.lte(audio)
        })?.tier ?? 'none'

      if (tier === 'none') {
        console.log('OK')
      }
      return { tier, isVerified }
    }
  )
