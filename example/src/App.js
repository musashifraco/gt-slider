import React from 'react'

// import { Slider, SliderItem } from 'mylib-musashifraco'
import 'mylib-musashifraco/dist/index.css'
import { Slider } from './components/Slider/Slider'
import { SliderItem } from './components/Slider/SliderItem/SliderItem'

const App = () => {
  return (
    <>
      <Slider>
        <SliderItem>
          <h3>1</h3>
        </SliderItem>
        <SliderItem>
          <h3>2</h3>
        </SliderItem>
        <SliderItem>
          <h3>3</h3>
        </SliderItem>
      </Slider>
    </>
  )
}

export default App
