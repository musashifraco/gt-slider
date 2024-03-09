import React from 'react'

import { Slider, SliderItem } from 'mylib-musashifraco'
import { Container } from './FiniteMode.styles'
import '../../index.css'

const FiniteMode = () => {
  const config = {
    visibleElements: 3,
    elementsToScroll: 1,
    gap: 10,
    centerMode: false,
    infiniteMode: false
  }

  return (
    <Container>
      <h2>Multiple Items (finite)</h2>
      <Slider config={config}>
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

export default FiniteMode
