import { useRef, useState } from 'react'

export function useCarousel(
  sliderRef,
  numberOfElementsWithoutSlider,
  carouselActive,
  setCarouselActive
) {
  let isDown = useRef(false)
  let startX = useRef(0)
  let scrollLeft = useRef(0)

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

  const mousedown = (e) => {
    const elementIsNull = !element
    if (elementIsNull) return
    isDown = true

    startX = e.pageX - element.offsetLeft
    scrollLeft = element.scrollLeft
  }

  console.log('renderizou')

  const mouseleave = () => {
    isDown = false
  }

  const mouseup = () => {
    isDown = false
  }

  const mousemove = (e) => {
    const elementIsNull = !element
    if (!isDown || elementIsNull) return

    const x = e.pageX - element.offsetLeft
    const walk = (x - startX) * 3
    element.scrollLeft = scrollLeft - walk
  }

  return {
    handleNextItem,
    handlePrevItem,
    mousedown,
    mouseleave,
    mouseup,
    mousemove
  }
}
