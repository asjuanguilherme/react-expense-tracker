import styled from 'styled-components'

export const Dashboard = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   gap: 1.5rem;
   
   @media screen and (max-width: 640px) {
      grid-template-columns: 1fr;
   }
`