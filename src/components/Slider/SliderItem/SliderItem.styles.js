import styled from '@emotion/styled'
export const Container = styled('div')`
  * {
    -webkit-user-drag: none; /* Safari */
    -khtml-user-drag: none; /* Konqueror */
    -moz-user-drag: none; /* Firefox */
    -o-user-drag: none; /* Opera */
  }

  background-color: ${(props) =>
    props.isActive === true ? 'purple' : 'yellow'};
  min-width: ${(props) => {
    return props.sliderWidthItem
  }}px;

  h3 {
    margin: 0;
  }
`
