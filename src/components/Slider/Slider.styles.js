import styled from '@emotion/styled'

export const Container = styled.div`
  // box-sizing: border-box;
  position: relative;
  display: flex;
  overflow-y: scroll;
  -ms-overflow-style: none; /* Para o Internet Explorer 10+ */
  scrollbar-width: none; /* Para navegadores baseados em Firefox */
  width: 100%;
  height: fit-content;
  gap: ${(props) => {
    return props.gap
  }}px;
  flex-direction: row;
  padding-left: ${(props) => {
    return props.gap
  }}px;
  scroll-behavior: smooth;
  max-width: 100vw;
`
