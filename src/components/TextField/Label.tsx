import styled from 'styled-components'

const StyledLabel = styled.label<{ $hasError?: boolean }>`
  color: ${(props) =>
    props.$hasError
      ? props.theme.colors.lightRed
      : props.theme.colors.smokeyGrey};
  font-size: 0.8rem;
  letter-spacing: 0.1rem;
  margin-bottom: 0.1rem;

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
`

export default StyledLabel
