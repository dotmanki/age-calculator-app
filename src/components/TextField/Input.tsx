import styled from 'styled-components'

const Input = styled.input<{ $hasError?: boolean }>`
  width: 5rem;
  height: 3rem;
  padding: 0.8rem;
  border-radius: 0.5rem;
  border: 1px solid
    ${({ theme, $hasError }) =>
      $hasError ? theme.colors.lightRed : theme.colors.lightGrey};
  font-size: 1.2rem;
  font-weight: 800;

  @media (min-width: 768px) {
    width: 10rem;
    height: 4rem;
    font-size: 2rem;
  }
`

export default Input
