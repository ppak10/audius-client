import { ID } from 'models/common/Identifiers'
import React, { cloneElement, ReactElement, useMemo } from 'react'
import { useSelector } from 'utils/reducer'
import { ReactComponent as IconVerified } from 'assets/img/iconVerified.svg'
import IconBronzeBadge from 'assets/img/IconBronzeBadge.png'
import IconSilverBadge from 'assets/img/IconSilverBadge.png'
import IconGoldBadge from 'assets/img/IconGoldBadge.png'
import IconPlatinumBadge from 'assets/img/IconPlatinumBadge.png'
import styles from './UserBadges.module.css'
import { BadgeTier, makeGetTierAndVerifiedForUser } from './utils'
import cn from 'classnames'
import { Nullable } from 'utils/typeUtils'

const audioTierMap: { [tier in BadgeTier]: Nullable<ReactElement> } = {
  none: null,
  bronze: <img src={IconBronzeBadge} />,
  silver: <img src={IconSilverBadge} />,
  gold: <img src={IconGoldBadge} />,
  platinum: <img src={IconPlatinumBadge} />
}

type UserBadgesProps = { userId: ID; badgeSize: number; className?: string }

const UserBadges: React.FC<UserBadgesProps> = ({
  userId,
  badgeSize,
  className
}) => {
  // Getting reselect selectors w/props to play nicely with useSelector
  // is a bit of a song-and-dance:
  // https://react-redux.js.org/next/api/hooks#useselector-examples
  // const tierAndVerifiedSelector = useMemo(makeGetTierAndVerifiedForUser, [])

  // const { tier, isVerified } = useSelector(state => {
  //   return tierAndVerifiedSelector(state, { userId })
  // })

  const tier = 'gold'
  const isVerified = true

  const audioBadge = audioTierMap[tier]

  return (
    <div className={cn(styles.container, className)}>
      {isVerified && <IconVerified height={badgeSize} width={badgeSize} />}
      {audioBadge &&
        cloneElement(audioBadge, { height: badgeSize, width: badgeSize })}
    </div>
  )
}

export default UserBadges
