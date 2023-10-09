import PrimarySpan from '@components/PrimarySpan/PrimarySpan'
import styled from 'styled-components'

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  primaryText?: string
  secondaryText?: string
}

const StyledDisplay = styled.h2`
  font-style: italic;
  font-weight: 800;
  font-size: 3rem;

  @media (min-width: 768px) {
    font-size: 5rem;
  }
`

const Display = ({ primaryText, secondaryText }: Props) => {
  return (
    <StyledDisplay>
      <PrimarySpan>{primaryText}</PrimarySpan>
      {secondaryText}
    </StyledDisplay>
  )
}

export default Display
