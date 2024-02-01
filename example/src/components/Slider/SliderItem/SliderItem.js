import React, { useRef } from 'react'
import { Container } from './SliderItem.styles'

export const SliderItem = ({
  children,
  index,
  carouselActive,
  sliderWidth,
  gap,
  sliderRef
}) => {
  const sliderItemRef = useRef(null)
  const sliderWidthItem = (sliderWidth - 4 * gap) / 2

  if (sliderItemRef.current && sliderRef.current) {
    if (carouselActive === index) {
      sliderRef.current.scrollLeft = sliderItemRef.current.offsetLeft - gap
    }
  }

  return (
    <Container
      sliderWidthItem={sliderWidthItem}
      gap={gap}
      isActive={index === carouselActive}
      ref={sliderItemRef}
    >
      {children}
    </Container>
  )
}
