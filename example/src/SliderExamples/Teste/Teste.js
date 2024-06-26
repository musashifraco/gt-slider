/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import * as S from './Teste.styled'
import { Slider, SliderItem, useCarousel } from 'mylib-musashifraco'

export function Teste() {
  const config = {
    visibleElements: 1,
    elementsToScroll: 1,
    gap: 20,
    centerMode: false,
    infiniteMode: true,
    numberOfElementsWithoutSlider: 14
  }

  const { handleNextItem, handlePrevItem, ...carouselProps } =
    useCarousel(config)
  return <S.Container>
    <Slider config={config} {...carouselProps}>
      <SliderItem><a href='https://www.youtube.com'><img src='https://random-image-pepebigotes.vercel.app/api/random-image' alt=''/></a></SliderItem>
      <SliderItem>2</SliderItem>
      <SliderItem>3</SliderItem>
    </Slider>
  </S.Container>
}
