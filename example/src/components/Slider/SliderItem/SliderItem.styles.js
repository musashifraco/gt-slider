import styled from '@emotion/styled'
export const Container = styled('div')`
   background-color: ${ (props) => props.isActive === true ? "purple" : "yellow"};
   min-width: ${(props) => {
      return props.sliderWidthItem
   }}px;
   


   h3 {
      margin: 0;
   }
`
