import styled from '@emotion/styled'

export const Container = styled.div`
  position: relative;
  display: flex;
  overflow-x: scroll;
  width: 100%;
  height: 100%;
  gap: ${(props) => {
    return props.gap
  }}px;
  flex-direction: row;
  padding-left: ${(props) => {
    return props.gap
  }}px;
  scroll-behavior: smooth;
  background-color: red;
`
