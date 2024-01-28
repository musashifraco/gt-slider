// eslint-disable-next-line no-unused-vars
import React, { cloneElement, useEffect, useRef, useState } from 'react'
import { Container } from './Slider.styles'
import { useCarousel } from '../../hooks/useCarousel'

export const Slider = ({ children }) => {
  const [sliderWidth, setSliderWidth] = useState(0)
  const [scrollController, setScrollController] = useState(0)
  const elementRef = useRef(null)

  const gap = 10

  const { handleNextItem, handlePrevItem, handleScroll } = useCarousel(
    elementRef,
    scrollController,
    setScrollController,
    sliderWidth,
    gap,
  )

  useEffect(() => {

  }, [scrollController])

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { sliderWidth })
    }
  })

  useEffect(() => {
    const element = elementRef?.current

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
      <Container onMouseUpCapture={handleScroll} ref={elementRef}>
        {childrenWithProps}
      </Container>
      <button onClick={handleNextItem}>PROXIMO</button>
    </>
  )
}
