import React from 'react'

// import { Slider, SliderItem } from 'mylib-musashifraco'
import 'mylib-musashifraco/dist/index.css'
import { Slider } from './components/Slider/Slider'
import { SliderItem } from './components/Slider/SliderItem/SliderItem'

const App = () => {
  
  const config = {
    visibleElements: 1,
    gap: 20
  }

  return (
    <>
      <Slider config={config}>
        <SliderItem>
          <h3>1</h3>
        </SliderItem>
        <SliderItem>
          <h3>2</h3>
        </SliderItem>
        <SliderItem>
          <h3>3</h3>
        </SliderItem>
        <SliderItem>
          <h3>4</h3>
        </SliderItem>
        <SliderItem>
          <h3>6</h3>
        </SliderItem>
        <SliderItem>
          <h3>7</h3>
        </SliderItem>
        <SliderItem>
          <h3>8</h3>
        </SliderItem>
      </Slider>
    </>
  )
}

export default App
