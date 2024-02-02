import React from 'react'

export function useCarousel(
  sliderRef,
  numberOfElementsWithoutSlider,
  carouselActive,
  setCarouselActive
) {
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
        console.log("Slider scrollLeft: " + ele.scrollLeft)
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
    handleTouchStart
  }
}
