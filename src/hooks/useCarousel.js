import React, { useRef, useState } from 'react'

export function useCarousel(config) {
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

  const [carouselActive, setCarouselActive] = useState(0)
  const sliderRef = useRef(null)

  const handleNextItem = () => {
    const element = sliderRef?.current
    const elementIsNull = !element
    const nextElement = carouselActive + config?.elementsToScroll

    const pastElements = carouselActive + 1 + config?.elementsToScroll
    const returnToStart = pastElements > config?.numberOfElementsWithoutSlider

    if (elementIsNull) {
      console.log('scroll action was interrupted! because: element is null!')
      return
    }

    if (returnToStart) {
      switch (config?.infiniteMode) {
        // infinite mode
        case true:
          setCarouselActive(0)
          break
        // finite mode
        case false:
          console.log(
            'scroll action was interrupted! because: infinity mode disabled'
          )
      }

      return
    }

    setCarouselActive(nextElement)
  }

  const handlePrevItem = () => {
    const element = sliderRef?.current
    const elementIsNull = !element
    const prevElement = carouselActive - config?.elementsToScroll

    const lastElement =
      config?.numberOfElementsWithoutSlider - config?.elementsToScroll

    const pastElements = carouselActive + 1 - config?.elementsToScroll
    const returnToStart = pastElements <= 0

    if (elementIsNull) {
      console.log('scroll action was interrupted! because: element is null!')
      return
    }

    if (returnToStart) {
      switch (config?.infiniteMode) {
        // infinite mode
        case true:
          setCarouselActive(lastElement)
          break
        // finite mode
        case false:
          console.log('modo infinito inativo!')
      }
      return
    }

    setCarouselActive(prevElement)
  }

  const handleMouseDown = React.useCallback(
    (e) => {
      const ele = sliderRef.current
      if (!ele) {
        return
      }

      let isInside = true

      const startPos = {
        left: ele.scrollLeft,
        top: ele.scrollTop,
        x: e.clientX,
        y: e.clientY
      }
      // quando quando começar o arrasto retira o scroll smooth, pois ele buga
      ele.style.scrollBehavior = 'inherit'
      const handleMouseMove = (e) => {
        isInside = false

        const dx = e.clientX - startPos.x
        const dy = e.clientY - startPos.y
        ele.scrollTop = startPos.top - dy
        ele.scrollLeft = startPos.left - dx
        updateCursor(ele)
      }

      const handleMouseUp = () => {
        // volta com o evento de clique permitindo que o evento ocorra
        setTimeout(() => {
          isInside = true
        }, 100)

        // quando terminar o arrasto volta com o scroll suave
        ele.style.scrollBehavior = 'smooth'
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
        resetCursor(ele)
      }

      const prevent = (e) => {
        if (!isInside) {
          e.preventDefault()
        }
      }

      document.addEventListener('click', prevent)
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    },
    [sliderRef]
  )

  const updateCursor = (ele) => {
    ele.style.cursor = 'grabbing'
    ele.style.userSelect = 'none'
  }

  const resetCursor = (ele) => {
    ele.style.cursor = 'grab'
    ele.style.removeProperty('user-select')
  }

  return {
    handleNextItem,
    handlePrevItem,
    handleMouseDown,
    sliderRef,
    carouselActive
  }
}
