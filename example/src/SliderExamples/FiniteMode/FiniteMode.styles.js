import styled from '@emotion/styled'
export const Container = styled('div')`
display: flex;
flex-direction: column;
align-items: center;
h2 {
  font-size: 35px;
  color: #FDFEFE;
}
`
export const SliderContainer = styled('div')`
display: flex;
align-items: center;
width: 60%;

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 230px;

  background-color: #808B96;

  h3 {
    font-size: 40px;
    color: #FDFEFE;
  }
}
`

export const Title = styled.h2``

export const NextItemButton = styled('div')`
  display: block;
  margin: 10px 10px;
  width: 25px;
  height: 25px;
  border-top: 4px solid #FDFEFE;
  border-left: 4px solid #FDFEFE;
  transform: rotate(135deg);
  transition: 0.5s;

  &:hover {
    transform: rotate(135deg) scale(1.4);
  }
`
export const PrevItemButton = styled('div')`
  display: block;
  margin: 10px 10px;
  width: 25px;
  height: 25px;
  border-top: 4px solid #FDFEFE;
  border-left: 4px solid #FDFEFE;
  transform: rotate(-45deg);
  transition: 0.5s;

&:hover {
  transform: rotate(-45deg) scale(1.4);
}
`
