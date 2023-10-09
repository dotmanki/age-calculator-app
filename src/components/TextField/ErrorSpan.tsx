import styled from 'styled-components'

const ErrorSpan = styled.span`
  font-style: italic;
  font-weight: 400;
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.lightRed};

  @media (min-width: 768px) {
    margin-top: 0.5rem;
    font-size: 0.9rem;
  }
`

export default ErrorSpan
