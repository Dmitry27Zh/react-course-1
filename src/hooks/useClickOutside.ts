import { useEffect } from 'react'
import { isNode } from '../types'

export default function (elementRef: React.RefObject<HTMLElement>, cb: () => void) {
  const clickHandler = (event: MouseEvent) => {
    const element = elementRef.current
    const { target } = event

    if (!element || !isNode(target)) {
      return
    }
    const isOutside = !element.contains(target)

    if (isOutside) {
      cb()
    }
  }
  useEffect(() => {
    document.addEventListener('click', clickHandler)

    return () => {
      document.removeEventListener('click', clickHandler)
    }
  }, [cb])
}
