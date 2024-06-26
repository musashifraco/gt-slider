import styled from '@emotion/styled'
export const Container = styled('div')`
  * {
    -webkit-user-drag: none; /* Safari */
    -khtml-user-drag: none; /* Konqueror */
    -moz-user-drag: none; /* Firefox */
    -o-user-drag: none; /* Opera */
  }

  transition: ${(props) =>
    props.isActive ? props.config.elementInFocus.transition : 1};

  transform: scale(
    ${(props) =>
      props.isActive
        ? props.config.elementInFocus.scale
        : props.config.unfocusedElement.scale}
  );

  opacity: ${(props) =>
    props.isActive
      ? props.config.elementInFocus.opacity
      : props.config.unfocusedElement.opacity};

  min-width: ${(props) => {
    return props.sliderWidthItem
  }}px;

  h3 {
    margin: 0;
  }
`
