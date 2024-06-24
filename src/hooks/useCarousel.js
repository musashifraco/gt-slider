import React, { useRef } from 'react'

export function useCarousel(
  numberOfElementsWithoutSlider,
  carouselActive,
  setCarouselActive,
  config
) {
  const sliderRef = useRef(null)

  const handleNextItem = () => {
    const element = sliderRef?.current
    const elementIsNull = !element
    const nextElement = carouselActive + config.elementsToScroll

    const pastElements = carouselActive + 1 + config.elementsToScroll
    const returnToStart = pastElements > numberOfElementsWithoutSlider

    if (elementIsNull) {
      console.log('scroll action was interrupted! because: element is null!')
      return
    }

    if (returnToStart) {
      switch (config.infiniteMode) {
        // infinite mode
        case true:
          setCarouselActive(0)
          break
        // finite mode
        case false:
          console.log(
            'scroll action was interrupted! because: infinity mode disabled'
          )
      }

      return
    }

    setCarouselActive(nextElement)
  }

  const handlePrevItem = () => {
    const element = sliderRef?.current
    const elementIsNull = !element
    const prevElement = carouselActive - config.elementsToScroll

    const lastElement = numberOfElementsWithoutSlider - config.elementsToScroll

    const pastElements = carouselActive + 1 - config.elementsToScroll
    const returnToStart = pastElements <= 0

    if (elementIsNull) {
      console.log('scroll action was interrupted! because: element is null!')
      return
    }

    if (returnToStart) {
      switch (config.infiniteMode) {
        // infinite mode
        case true:
          setCarouselActive(lastElement)
          break
        // finite mode
        case false:
          console.log('modo infinito inativo!')
      }
      return
    }

    setCarouselActive(prevElement)
  }

  const handleMouseDown = React.useCallback(
    (e) => {
      const ele = sliderRef.current
      if (!ele) {
        return
      }
      const startPos = {
        left: ele.scrollLeft,
        top: ele.scrollTop,
        x: e.clientX,
        y: e.clientY
      }
      ele.style.scrollBehavior = 'inherit'
      const handleMouseMove = (e) => {
        const dx = e.clientX - startPos.x
        const dy = e.clientY - startPos.y
        ele.scrollTop = startPos.top - dy
        ele.scrollLeft = startPos.left - dx
        updateCursor(ele)
      }

      const handleMouseUp = () => {
        ele.style.scrollBehavior = 'smooth'
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
        resetCursor(ele)
      }

      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    },
    [sliderRef]
  )

  const handleTouchStart = React.useCallback(
    (e) => {
      const ele = sliderRef.current
      if (!ele) {
        return
      }
      const touch = e.touches[0]
      const startPos = {
        left: ele.scrollLeft,
        top: ele.scrollTop,
        x: touch.clientX,
        y: touch.clientY
      }

      const handleTouchMove = (e) => {
        const touch = e.touches[0]
        const dx = touch.clientX - startPos.x
        const dy = touch.clientY - startPos.y
        ele.scrollTop = startPos.top - dy
        ele.scrollLeft = startPos.left - dx
        updateCursor(ele)
      }

      const handleTouchEnd = () => {
        document.removeEventListener('touchmove', handleTouchMove)
        document.removeEventListener('touchend', handleTouchEnd)
        resetCursor(ele)
      }

      document.addEventListener('touchmove', handleTouchMove)
      document.addEventListener('touchend', handleTouchEnd)
    },
    [sliderRef]
  )

  const updateCursor = (ele) => {
    ele.style.cursor = 'grabbing'
    ele.style.userSelect = 'none'
  }

  const resetCursor = (ele) => {
    ele.style.cursor = 'grab'
    ele.style.removeProperty('user-select')
  }

  return {
    handleNextItem,
    handlePrevItem,
    handleMouseDown,
    handleTouchStart,
    sliderRef
  }
}
