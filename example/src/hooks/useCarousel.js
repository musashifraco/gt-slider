export function useCarousel(
  elementRef,
  scrollController,
  setScrollController,
  sliderWidth,
  gap,
  setCarouselActive,
  carouselActive,
  numberOfElementsWithoutSlider
) {
  const element = elementRef?.current

  const handleNextItem = () => {
    const elementIsNull = !element
    const theLastElementIsActive = carouselActive === numberOfElementsWithoutSlider - 1


    if (elementIsNull || theLastElementIsActive) {
      console.log('scroll action was interrupted!')
      return
    }

    setCarouselActive((state) => state + 1)
    element.scrollLeft = scrollController;
  }

  const handlePrevItem = () => {
    const elementIsNull = !element
    const theFirstElementIsActive = carouselActive === 0

    if (elementIsNull) {
      console.log('scroll action was interrupted!')
      return
    }

    if (elementIsNull || theFirstElementIsActive) {
      console.log('scroll action was interrupted!')
      return
    }

    setCarouselActive((state) => state - 1)
    element.scrollLeft = scrollController;
  }

  const handleScroll = () => {
    setScrollController(element?.scrollLeft)
  }

  return { handleNextItem, handlePrevItem, handleScroll }
}
