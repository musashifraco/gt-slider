import React from 'react'
import { Container } from './SliderItem.styles'

export const SliderItem = ({ children, sliderWidth }) => {
  return <Container sliderWidth={sliderWidth + `px`}>{children}</Container>
}
