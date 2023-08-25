import { useEffect, useState } from 'react'

export function useMediaQuery(mq) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const textMediaQuey = `(max-width: ${mq}px)`
    const mediaQuery = window.matchMedia(textMediaQuey)
    setMatches(mediaQuery.matches)

    const handler = () => setMatches(e.matches)
    mediaQuery.addEventListener('change', handler)

    return () => mediaQuery.removeEventListener('change', handler)
  }, [mq])

  return matches
}