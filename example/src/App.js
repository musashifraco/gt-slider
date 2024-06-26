import React from 'react'

import { Container } from './App.styles'
import './index.css'
import SimpleSlider from './SliderExamples/SimpleSlider/SimpleSlider'
import MultipleItems from './SliderExamples/MultipleItems/MultipleItems'
import FiniteMode from './SliderExamples/FiniteMode/FiniteMode'
import CenterMode from './SliderExamples/CenterMode/CenterMode'

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
