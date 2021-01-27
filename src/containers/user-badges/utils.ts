import BN from 'bn.js'
import { ID } from 'models/common/Identifiers'
import { getAccountUser } from 'store/account/selectors'
import { getUser } from 'store/cache/users/selectors'
import { AppState } from 'store/types'
import {
  BNAudio,
  BNWei,
  getAccountBalance,
  StringWei,
  stringWeiToAudioBN,
  stringWeiToBN,
  weiToAudio
} from 'store/wallet/slice'
import { createSelector } from 'reselect'
import { getAudio } from 'store/player/selectors'

export type BadgeTier = 'none' | 'bronze' | 'silver' | 'gold' | 'platinum'

const badgeTiers: { tier: BadgeTier; minAudio: number }[] = [
  {
    tier: 'none',
    minAudio: 0
  },
  {
    tier: 'bronze',
    minAudio: 10
  },
  {
    tier: 'silver',
    minAudio: 1000
  },
  {
    tier: 'gold',
    minAudio: 10000
  },
  {
    tier: 'platinum',
    minAudio: 100000
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

const getTierAndVerifiedForUser = createSelector(
  [getWeiBalanceForUser, getVerifiedForUser],
  (wei, isVerified) => {
    const audio = stringWeiToAudioBN(wei)

    const tier =
      badgeTiers.reverse().find(t => {
        const minBN = new BN(t.minAudio) as BNAudio
        return minBN.lte(audio)
      })?.tier ?? 'none'

    return { tier, isVerified }
  }
)

export const makeGetTierAndVerifiedForUser = () => getTierAndVerifiedForUser

// export const getTierAndVerifiedForUser = (userId: ID) => (
//   state: AppState
// ): { tier: BadgeTier; isVerified: boolean } => {
//   const { audioWei, isVerified } = getAudioAndVerified(userId)(state)
//   const audio = weiToAudio(audioWei)

//   const tier =
//     badgeTiers.reverse().find(t => {
//       const minBN = new BN(t.minAudio) as BNAudio
//       return minBN.lte(audio)
//     })?.tier ?? 'none'

//   return { tier, isVerified }
// }
