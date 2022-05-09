import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 640px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;

  @media only screen and (max-width: 640px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
`
