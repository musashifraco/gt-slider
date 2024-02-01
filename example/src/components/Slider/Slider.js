// eslint-disable-next-line no-unused-vars
import React, { cloneElement, useEffect, useRef, useState } from 'react'
import { Container } from './Slider.styles'
import { useCarousel } from '../../hooks/useCarousel'

export const Slider = ({ children }) => {
  const [sliderWidth, setSliderWidth] = useState(0)
  const [carouselActive, setCarouselActive] = useState(0)
  const numberOfElementsWithoutSlider = React.Children.count(children)

  const sliderRef = useRef(null)

  const gap = 10

  const {
    handleNextItem,
    handlePrevItem,
    mousedown,
    mouseleave,
    mouseup,
    mousemove
  } = useCarousel(
    sliderRef,
    numberOfElementsWithoutSlider,
    carouselActive,
    setCarouselActive
  )

  const childrenWithProps = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        index,
        carouselActive,
        sliderWidth,
        gap,
        sliderRef
      })
    }
  })

  useEffect(() => {
    const element = sliderRef?.current

    if (!element) return

    const observer = new ResizeObserver(() => {
      setSliderWidth(element.clientWidth)
    })

    observer.observe(element)
    return () => {
      observer.disconnect()
    }
  }, [])
  return (
    <>
      <button onClick={handlePrevItem}>ANTERIOR</button>
      <Container
        onMouseDownCapture={mousedown}
        onMouseLeave={mouseleave}
        onMouseUpCapture={mouseup}
        onMouseMoveCapture={mousemove}
        ref={sliderRef}
      >
        {childrenWithProps}
      </Container>
      <button onClick={handleNextItem}>PROXIMO</button>
    </>
  )
}
