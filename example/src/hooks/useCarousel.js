export function useCarousel(elementRef, scrollController, setScrollController, sliderWidth, gap) {
    const element = elementRef?.current
    
    const handleNextItem = () => {
        const newValueForScrollThumb = scrollController + sliderWidth + gap

        const elementIsNull = !element
        const scrollThumbIsAtItsLimit = newValueForScrollThumb > element.scrollWidth


        if(elementIsNull || scrollThumbIsAtItsLimit) {
            console.log("scroll action was interrupted!")
            return
        }

        setScrollController(newValueForScrollThumb)
        element.scrollLeft = newValueForScrollThumb
    }

    const handlePrevItem = () => {
        const elementIsNull = !element
        const scrollThumbIsAtItsLimit = scrollController === 0
        const scrollThumbIsAlmostAtItsLimit = scrollController - sliderWidth - gap < 0


        if(elementIsNull || scrollThumbIsAtItsLimit) {
            console.log("scroll action was interrupted!")
            return
        }

        if(scrollThumbIsAlmostAtItsLimit) {
            setScrollController(0)
            element.scrollLeft = 0
            return
        }

        setScrollController(scrollController - sliderWidth - gap)
        element.scrollLeft = scrollController - sliderWidth - gap
    }

    const handleScroll = () => {
        setScrollController(element?.scrollLeft)
    }

    return { handleNextItem, handlePrevItem, handleScroll }
}