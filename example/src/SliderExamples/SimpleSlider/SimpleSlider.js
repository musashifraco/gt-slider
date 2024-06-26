import React from 'react'
import { Slider, SliderItem, useCarousel } from 'mylib-musashifraco'
import * as S from './SimpleSlider.styles'
import '../../index.css'

const SimpleSlider = () => {
  const config = {
    visibleElements: 1,
    elementsToScroll: 1,
    gap: '0px',
    centerMode: false,
    infiniteMode: true,
    numberOfElementsWithoutSlider: 5,
    elementInFocus: {
      scale: 1,
      transition: '0.5s'
    }
  }

  const { handleNextItem, handlePrevItem, ...carouselProps } =
    useCarousel(config)

  return (
    <S.Container>
      <S.Title>Simple Slider</S.Title>
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

export default SimpleSlider
