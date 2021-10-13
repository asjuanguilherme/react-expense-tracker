import styled from 'styled-components'

export const Header = styled.header`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;

   @media only screen and (max-width: 540px ) {
      flex-direction: column;
   }
`

export const Title = styled.h1`
   font-size: 2.5rem;
   font-weight: bold;
`