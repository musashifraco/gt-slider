import styled from '@emotion/styled'
export const Container = styled('div')`
  background-color: ${(props) =>
    props.isActive === true ? 'purple' : 'yellow'};
  min-width: 200px;
  width: 200px;
  height: 200px;

  h3 {
    margin: 0;
  }
`
