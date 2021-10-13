import styled from 'styled-components'

export const Wrapper = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;

   background-color: lighten(${ props => props.theme.colors.background }, 20%);

   padding: .5rem;
   border-radius: 2rem;
   color: white;
`

export const DateTitle = styled.div`
   font-size: 1.1rem;
`

export const Arrow = styled.span`
   display: flex;
   align-items: center;
   justify-content: center;
`