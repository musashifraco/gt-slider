import React from 'react'

import { Container } from './App.styles'
import './index.css'
import SimpleSlider from './SliderExamples/SimpleSlider/SimpleSlider'
import MultipleItems from './SliderExamples/MultipleItems/MultipleItems'
import CenterMode from './SliderExamples/CenterMode/CenterMode'
import FiniteMode from './SliderExamples/FiniteMode/FiniteMode'

const App = () => {
  return (
    <Container>
      <SimpleSlider />
      <MultipleItems />
      <FiniteMode />
      <CenterMode />
    </Container>
  )
}

export default App
