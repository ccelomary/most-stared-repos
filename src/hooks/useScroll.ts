import { useState, useEffect } from 'react'

const useScroll: () => boolean = () => {
  const [isBottom, setIsBottom] = useState(false)

  const handleScroll: (e: Event) => void = (e) => {
    const eventTarget = e.target as Document
    const currentScrollHeight = eventTarget.documentElement.scrollTop + innerHeight
    const pageFullHeight = eventTarget.documentElement.scrollHeight
    setIsBottom(currentScrollHeight === pageFullHeight)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return isBottom
}

export default useScroll
