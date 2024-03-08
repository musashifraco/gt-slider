import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`

export const SliderContainer = styled.div`
  position: relative;
  display: flex;
  overflow-x: scroll;
  height: 100px;
  width: 1000px;
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

export const SliderButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 39px;
  height: 39px;
  background-color: transparent;
  border: 2px solid #0047ff;
  border-radius: 9999px;
`
