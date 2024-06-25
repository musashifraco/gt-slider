import React from 'react'

import { Slider, SliderItem, useCarousel } from 'mylib-musashifraco'
import { Container } from './MultipleItems.styles'
import '../../index.css'

const MultipleItems = () => {
  const config = {
    visibleElements: 3,
    elementsToScroll: 1,
    gap: 10,
    centerMode: false,
    infiniteMode: true,
    numberOfElementsWithoutSlider: 14

  }

  const { handleNextItem, handlePrevItem, ...carouselProps } =
    useCarousel(
      config
    )

  return (
    <Container>
      <h2>Multiple Items (infinite)</h2>
      <button onClick={handlePrevItem}>
        esquerda
      </button>
      <button onClick={handleNextItem}>
        direita
      </button>
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

export default MultipleItems
