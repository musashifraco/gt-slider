import React from 'react'

import { Slider, SliderItem, useCarousel } from 'mylib-musashifraco'
import '../../index.css'
import * as S from './CenterMode.styles'

const CenterMode = () => {
  const config = {
    visibleElements: 3,
    elementsToScroll: 1,
    gap: 10,
    centerMode: true,
    infiniteMode: true,
    numberOfElementsWithoutSlider: 5
  }

  const { handleNextItem, handlePrevItem, ...carouselProps } =
  useCarousel(
    config
  )

  return (
    <S.Container>
    <S.Title>Center Mode</S.Title>
    <S.SliderContainer>
      <S.PrevItemButton onClickCapture={handlePrevItem}></S.PrevItemButton>
      <Slider config={config} {...carouselProps}>
        <SliderItem>
          <div className='content'>
            <h3>1</h3>
          </div>
        </SliderItem>
        <SliderItem>
          <div className='content'>
            <h3>2</h3>
          </div>
        </SliderItem>
        <SliderItem>
          <div className='content'>
            <h3>3</h3>
          </div>
        </SliderItem>
        <SliderItem>
          <div className='content'>
            <h3>4</h3>
          </div>
        </SliderItem>
        <SliderItem>
          <div className='content'>
            <h3>5</h3>
          </div>
        </SliderItem>
      </Slider>
      <S.NextItemButton onClickCapture={handleNextItem}></S.NextItemButton>
    </S.SliderContainer>
  </S.Container>
  )
}

export default CenterMode
