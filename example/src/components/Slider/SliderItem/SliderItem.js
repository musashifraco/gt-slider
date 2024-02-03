import React, { useRef } from 'react'
import { Container } from './SliderItem.styles'

export const SliderItem = ({
  children,
  index,
  carouselActive,
  sliderWidth,
  sliderRef,
  config
}) => {
  const numberOfGaps = config.visibleElements + 1


  const sliderItemRef = useRef(null)
  const sliderWidthItem = (sliderWidth - numberOfGaps * config.gap) / config.visibleElements

  if (sliderItemRef.current && sliderRef.current) {

    // center mode true
    if (carouselActive === index && config.centerMode === true) {
      let meioDoContainer = sliderRef.current.offsetWidth / 2;
      let posicaoDoElemento = sliderItemRef.current.offsetLeft + sliderItemRef.current.offsetWidth / 2;
      let novaPosicaoScroll = posicaoDoElemento - meioDoContainer;

      sliderRef.current.scrollLeft = novaPosicaoScroll
    }

    // center mode false

    if(carouselActive === index && config.centerMode === false) {
      let novaPosicaoScroll = sliderItemRef.current.offsetLeft - config.gap

      sliderRef.current.scrollLeft = novaPosicaoScroll
    }
  }

  return (
    <Container
      sliderWidthItem={sliderWidthItem}
      gap={config.gap}
      isActive={index === carouselActive}
      ref={sliderItemRef}
    >
      {children}
    </Container>
  )
}
