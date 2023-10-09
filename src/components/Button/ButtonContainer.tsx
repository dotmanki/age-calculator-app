import styled from 'styled-components'

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  margin: 1.5rem 0;

  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 1px;
    border: 1px solid ${(props) => props.theme.colors.lightGrey};
    top: 50%;
    z-index: 0;
  }

  @media (min-width: 768px) {
    justify-content: flex-end;
    margin: 0;
  }
`

export default ButtonContainer
