import styled from '@emotion/styled'
export const Container = styled.div`
  display: flex;
  overflow-x: scroll;
  width: 60%;
  gap: ${(props) => {
      return props.gap
   }}px;
  flex-direction: row;
  background-color: blue;
  padding-left: ${(props) => {
      return props.gap
   }}px;
  scroll-behavior: smooth;
`
