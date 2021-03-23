import { useMemo } from 'react'
import { isMobile } from 'utils/clientUtil'
import cn from 'classnames'
import { ClassValue } from 'classnames/types'

export const useWithMobileStyle = (mobileClassName: string) => {
  const mobile = isMobile()

  const withMobile = useMemo(() => {
    const mobileStyle = { [mobileClassName]: mobile }
    return (...classnames: ClassValue[]) => cn(...classnames, mobileStyle)
  }, [mobile, mobileClassName])

  return withMobile
}
