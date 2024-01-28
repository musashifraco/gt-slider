import React, { useRef } from 'react'
import { Container } from './SliderItem.styles'

export const SliderItem = ({ children, index, carouselActive, setScrollController, sliderWidth, gap }) => { 
  const sliderItemRef = useRef(null) 
  const sliderWidthItem = (sliderWidth - 4 * gap) / 3

  if (sliderItemRef.current) {
    if(carouselActive === index) {
      setScrollController(sliderItemRef.current.offsetLeft + sliderWidthItem)
    }    
  }

  return <Container sliderWidthItem={sliderWidthItem} gap={gap} isActive={index === carouselActive} ref={sliderItemRef}>{children}</Container>
}
