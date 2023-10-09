import styled from 'styled-components'

const Card = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  padding: 3rem 1.5rem;
  border-radius: 1.5rem 1.5rem 6rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    width: 65%;
    padding: 3.5rem;
    border-bottom-right-radius: 10rem;
  }
`

export default Card
