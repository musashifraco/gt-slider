// eslint-disable-next-line no-unused-vars
import React, { cloneElement, useEffect, useRef, useState } from 'react'
import { Container } from './Slider.styles'
import { useCarousel } from '../../hooks/useCarousel'

export const Slider = ({ children, config }) => {
  const [sliderWidth, setSliderWidth] = useState(0)
  const [carouselActive, setCarouselActive] = useState(0)
  const numberOfElementsWithoutSlider = React.Children.count(children)

  const sliderRef = useRef(null)

  const {
    handleNextItem,
    handlePrevItem,
    handleMouseDown,
    handleTouchStart
  } = useCarousel(
    sliderRef,
    numberOfElementsWithoutSlider,
    carouselActive,
    setCarouselActive,
    config
  )

  const childrenWithProps = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        index,
        carouselActive,
        sliderWidth,
        sliderRef,
        config
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
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        gap={config.gap}
      >
        {childrenWithProps}
      </Container>
      <button onClick={handleNextItem}>PROXIMO</button>
    </>
  )
}
