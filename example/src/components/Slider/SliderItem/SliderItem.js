import React, { useRef } from 'react'
import { Container } from './SliderItem.styles'

export const SliderItem = ({
  children,
  index,
  carouselActive,
  sliderWidth,
  gap,
  sliderRef,
  config
}) => {
  const numberOfGaps = config.visibleElements + 1


  const sliderItemRef = useRef(null)
  const sliderWidthItem = (sliderWidth - numberOfGaps * config.gap) / config.visibleElements

  if (sliderItemRef.current && sliderRef.current) {

    if (carouselActive === index) {
      var meioDoContainer = sliderRef.current.offsetWidth / 2;
      var posicaoDoElemento = sliderItemRef.current.offsetLeft + sliderItemRef.current.offsetWidth / 2;
      var novaPosicaoScroll = posicaoDoElemento - meioDoContainer;

      sliderRef.current.scrollLeft = novaPosicaoScroll
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
