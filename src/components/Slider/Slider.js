import React, {
  // eslint-disable-next-line no-unused-vars
  cloneElement,
  useEffect,
  useState
} from 'react'

import * as S from './Slider.styles'

export const Slider = ({
  children,
  config,
  sliderRef,
  carouselActive,
  handleMouseDown
}) => {
  const [sliderWidth, setSliderWidth] = useState(0)

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
      console.log(element.clientWidth)
      setSliderWidth(element.clientWidth)
    })

    observer.observe(element)
    return () => {
      observer.disconnect()
    }
  }, [])
  return (
    <S.Container
      className='slider'
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      gap={config.gap}
    >
      {childrenWithProps}
    </S.Container>
  )
}
