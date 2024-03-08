import React, {
  // eslint-disable-next-line no-unused-vars
  cloneElement,
  useEffect,
  useRef,
  useState
} from 'react'
import { useCarousel } from '../../hooks/useCarousel'
import { ArrowLeft, ArrowRight } from '../../svg/Icons'

import * as S from './Slider.styles'

export const Slider = ({ children, config }) => {
  const [sliderWidth, setSliderWidth] = useState(0)
  const [carouselActive, setCarouselActive] = useState(0)
  const numberOfElementsWithoutSlider = React.Children.count(children)

  const sliderRef = useRef(null)

  const { handleNextItem, handlePrevItem, handleMouseDown, handleTouchStart } =
    useCarousel(
      sliderRef,
      numberOfElementsWithoutSlider,
      carouselActive,
      setCarouselActive,
      config
    )

  const childrenWithProps = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        index,
        carouselActive,
        sliderWidth,
        sliderRef,
        config
      })
    }
  })

  useEffect(() => {
    const element = sliderRef?.current

    if (!element) return

    // eslint-disable-next-line no-undef
    const observer = new ResizeObserver(() => {
      setSliderWidth(element.clientWidth)
    })

    observer.observe(element)
    return () => {
      observer.disconnect()
    }
  }, [])
  return (
    <S.Container>
      <S.SliderButton onClick={handlePrevItem}>
        <ArrowLeft />
      </S.SliderButton>
      <S.SliderContainer
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        gap={config.gap}
      >
        {childrenWithProps}
      </S.SliderContainer>
      <S.SliderButton onClick={handleNextItem}>
        <ArrowRight />
      </S.SliderButton>
    </S.Container>
  )
}
