import styled from 'styled-components'

export const FormContainer = styled.form`
   width: 100%;
   padding: 1.5rem;
   padding-bottom: 2.5rem;
   
   background-color: white;
   border-radius: 1.5rem;

   display: grid;
   grid-template-columns: 1fr 1fr 2fr 1fr 1fr;
   align-items: flex-end;
   gap: 1rem;

   @media screen and (max-width: 991px) {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 2.5rem;
   }

   @media screen and (max-width: 640px) {
      grid-template-columns: 1fr 1fr;
   }

   @media screen and (max-width: 480px) {
      grid-template-columns: 1fr;
   }
`