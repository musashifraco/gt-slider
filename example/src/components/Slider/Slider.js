/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react'
import { Container } from './Slider.styles'

export const Slider = ({ children }) => {
  const elementRef = useRef(null)

  // Start observing the element when the component is mounted
  useEffect(() => {
    const element = elementRef?.current

    if (!element) return

    const observer = new ResizeObserver(() => {
      // 👉 Do something when the element is resized
      console.log("change!")
    })

    observer.observe(element)
    return () => {
      // Cleanup the observer by unobserving all elements
      observer.disconnect()
    }
  }, [])
  return <Container ref={elementRef}>{children}</Container>
}
