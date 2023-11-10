import { useEffect } from 'react'

export default function (elementRef: React.RefObject<HTMLElement>, cb: () => void) {
  const clickHandler = (event: MouseEvent) => {
    const isOutside = document
      .elementsFromPoint(event.clientX, event.clientY)
      .every((element) => element !== elementRef.current)

    if (isOutside) {
      cb()
    }
  }
  useEffect(() => {
    document.addEventListener('click', clickHandler, true)

    return () => {
      document.removeEventListener('click', clickHandler, true)
    }
  }, [])
}
