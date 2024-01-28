// eslint-disable-next-line no-unused-vars
import React, { cloneElement, useEffect, useRef, useState } from 'react'
import { Container } from './Slider.styles'
import { useCarousel } from '../../hooks/useCarousel'

export const Slider = ({ children }) => {
  const [sliderWidth, setSliderWidth] = useState(0)
  const [scrollController, setScrollController] = useState(0)
  const [carouselActive, setCarouselActive] = useState(0)
  const numberOfElementsWithoutSlider = React.Children.count(children)

  const sliderRef = useRef(null)


  const gap = 10

  const { handleNextItem, handlePrevItem, handleScroll } = useCarousel(
    sliderRef,
    scrollController,
    setScrollController,
    sliderWidth,  
    gap,
    setCarouselActive,
    carouselActive,
    numberOfElementsWithoutSlider
  )
  
  const childrenWithProps = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {index, carouselActive, setScrollController, sliderWidth, gap})
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
  }, [scrollController])
  return (
    <>
      <button onClick={handlePrevItem}>ANTERIOR</button>
      <Container onMouseUpCapture={handleScroll} ref={sliderRef}>
        {childrenWithProps}
      </Container>
      <button onClick={handleNextItem}>PROXIMO</button>
    </>
  )
}
