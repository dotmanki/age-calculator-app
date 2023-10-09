import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  width: 3.5rem;
  height: 3.5rem;
  padding: 0.8rem;
  border: none;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  @media (min-width: 768px) {
    width: 5.5rem;
    height: 5.5rem;

    & img {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`

const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <StyledButton {...props}>
      <img src='icon-arrow.svg' alt='arrow' width={24} height={24} />
    </StyledButton>
  )
}

export default Button
