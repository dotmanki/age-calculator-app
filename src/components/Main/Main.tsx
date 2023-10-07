import styled from 'styled-components'

const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.offWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 1rem;
`

export default Main
