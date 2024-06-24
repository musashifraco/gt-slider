import React, { useState } from 'react'

import { Slider, SliderItem, useCarousel } from 'mylib-musashifraco'
import { Container } from './SimpleSlider.styles'
import '../../index.css'

const SimpleSlider = () => {
  const [carouselActive, setCarouselActive] = useState(0)
  const numberOfElementsWithoutSlider = 14



  const config = {
    visibleElements: 1,
    elementsToScroll: 1,
    gap: 10,
    centerMode: false,
    infiniteMode: true
  }

  const { handleNextItem, handlePrevItem, handleMouseDown, handleTouchStart, sliderRef } =
    useCarousel(
      numberOfElementsWithoutSlider,
      carouselActive,
      setCarouselActive,
      config
    )



  return (
    <Container>
      <h2>Simple Slider </h2>
      <button onClick={handlePrevItem}>
        esquerda
      </button>
      <button onClick={handleNextItem}>
        direita
      </button>
      <Slider config={config} sliderRef={sliderRef} carouselActive={carouselActive} handleMouseDown={handleMouseDown} handleTouchStart={handleTouchStart}>
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
        <SliderItem>
          <div className='content'>
            <h3>6</h3>
          </div>
        </SliderItem>
        <SliderItem>
          <div className='content'>
            <h3>7</h3>
          </div>
        </SliderItem>
        <SliderItem>
          <div className='content'>
            <h3>8</h3>
          </div>
        </SliderItem>
        <SliderItem>
          <div className='content'>
            <h3>9</h3>
          </div>
        </SliderItem>
        <SliderItem>
          <div className='content'>
            <h3>10</h3>
          </div>
        </SliderItem>
        <SliderItem>
          <div className='content'>
            <h3>11</h3>
          </div>
        </SliderItem>
        <SliderItem>
          <div className='content'>
            <h3>12</h3>
          </div>
        </SliderItem>
        <SliderItem>
          <div className='content'>
            <h3>13</h3>
          </div>
        </SliderItem>
        <SliderItem>
          <div className='content'>
            <h3>14</h3>
          </div>
        </SliderItem>
      </Slider>
    </Container>
  )
}

export default SimpleSlider
