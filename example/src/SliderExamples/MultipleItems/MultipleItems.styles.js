import styled from '@emotion/styled'
export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
`
export const SliderContainer = styled('div')`
  display: flex;
  align-items: center;
`

export const Title = styled.h2``

export const NextItemButton = styled('div')`
  display: block;
  margin: 10px 10px;
  width: 25px;
  height: 25px;
  border-top: 2px solid #000;
  border-left: 2px solid #000;
  transform: rotate(135deg);
`
export const PrevItemButton = styled('div')`
  display: block;
  margin: 10px 10px;
  width: 25px;
  height: 25px;
  border-top: 2px solid #000;
  border-left: 2px solid #000;
  transform: rotate(-45deg);
`
