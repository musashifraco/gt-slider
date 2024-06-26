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
  const configDefault = {
    visibleElements: 1,
    elementsToScroll: 1,
    gap: '20px',
    centerMode: false,
    infiniteMode: true,
    numberOfElementsWithoutSlider: 5,
    elementInFocus: {
      scale: '1',
      transition: '0.5s',
      opacity: '1'
    },
    unfocusedElement: {
      scale: '1',
      transition: '0.5s',
      opacity: '0.7'
    }
  }

  for (const chave in configDefault) {
    // Verificar se a chave já existe no primeiro objeto
    // eslint-disable-next-line no-prototype-builtins
    if (!config.hasOwnProperty(chave)) {
      // Adicionar a propriedade ao primeiro objeto apenas se não existir
      config[chave] = configDefault[chave]
    }
  }

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
