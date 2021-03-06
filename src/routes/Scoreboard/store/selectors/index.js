import { createSelector } from 'reselect'
import { normalizeHex } from 'utils/helpers'
import { getActiveProvider, getCurrentAccount } from 'integrations/store/selectors'

const tournamentUsersSelectorAsList = (state) => {
  if (!state.tournament) {
    return undefined
  }

  if (!state.tournament.ranking) {
    return undefined
  }

  return state.tournament.ranking.toList()
}

export const firstTournamentUsersSelectorAsList = createSelector(
  tournamentUsersSelectorAsList,
  users =>
    (users
      ? users
        .filter(user => user.currentRank > 0)
        .sort((userA, userB) => {
          if (userA.currentRank > userB.currentRank) {
            return 1
          }

          if (userA.currentRank < userB.currentRank) {
            return -1
          }

          return 0
        })
        .take(100)
      : undefined),
)

export const tournamentMainnetRegistryAddress = (state) => {
  const provider = getActiveProvider(state)

  return provider ? provider.mainnetAddress : undefined
}

export const meSelector = createSelector(
  tournamentUsersSelectorAsList,
  getCurrentAccount,
  (users, account) => (users && account ? users.find(user => normalizeHex(user.account) === normalizeHex(account)) : undefined),
)

export const areRewardsClaimed = state => state.tournament.rewards.get('rewardsClaimed')
