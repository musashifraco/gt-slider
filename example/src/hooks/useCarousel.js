import { useCallback, useRef } from 'react'

export function useCarousel(
  sliderRef,
  numberOfElementsWithoutSlider,
  carouselActive,
  setCarouselActive
) {
  let isDown = useRef(false)
  let startX = useRef(0)
  let scrollLeft = useRef(0)

  isDown.current = false

  const element = sliderRef?.current

  const handleNextItem = () => {
    const elementIsNull = !element
    const theLastElementIsActive =
      carouselActive === numberOfElementsWithoutSlider - 1

    if (elementIsNull || theLastElementIsActive) {
      console.log('scroll action was interrupted!')
      return
    }

    setCarouselActive((state) => state + 1)
  }

  const handlePrevItem = () => {
    const elementIsNull = !element
    const theFirstElementIsActive = carouselActive === 0

    if (elementIsNull) {
      console.log('scroll action was interrupted!')
      return
    }

    if (elementIsNull || theFirstElementIsActive) {
      console.log('scroll action was interrupted!')
      return
    }
    setCarouselActive((state) => state - 1)
  }


  const mousedown = useCallback((e) => {
    const elementIsNull = !element
    if (elementIsNull) return
    isDown.current = true

    startX.current = e.pageX - element.offsetLeft
    scrollLeft.current = element.scrollLeft
  }, [element])


  const mouseleave = useCallback( () => {
    isDown.current = false
  }, [])

  const mouseup = useCallback( () => {
    isDown.current = false
  }, [])


  const mousemove = useCallback((e) => {
    const elementIsNull = !element
    if (!isDown.current || elementIsNull) return

    const x = e.pageX - element.offsetLeft
    const walk = (x - startX.current) * 3
    element.scrollLeft = scrollLeft.current - walk
  }, [element])

  return {
    handleNextItem,
    handlePrevItem,
    mousedown,
    mouseleave,
    mouseup,
    mousemove
  }
}
