import styled from '@emotion/styled'

export const Container = styled.div`
  // box-sizing: border-box;
  position: relative;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  -ms-overflow-style: none; /* Para o Internet Explorer 10+ */
  scrollbar-width: none; /* Para navegadores baseados em Firefox */
  width: 100%;
  height: fit-content;
  gap: ${(props) => {
    return `${props.gap}`
  }};
  flex-direction: row;
  padding-left: ${(props) => {
    return props.gap
  }};
  scroll-behavior: smooth;
  max-width: 100vw;
`
