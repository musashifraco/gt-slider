import React, { useEffect, useRef, useState } from 'react'
import { Container } from './Slider.styles'

const Slider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [sliderWidth, setSliderWidth] = useState(0)
  const SliderRef = useRef(null)

  useEffect(() => {
    const width = SliderRef?.current?.clientWidth
    setSliderWidth(width)
    console.log('width: ' + width)
  }, [SliderRef?.current?.clientWidth])
  return <Container>{children}</Container>
}
