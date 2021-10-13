import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'

export const Wrapper = styled.div`
   display: flex;
   max-width: 100%;
   justify-content: space-between;
   padding: 1rem;
   width: 100%;

   background-color: white;
   border-radius: 1rem;

   @media screen and (max-width: 640px) {
      flex-wrap: wrap;
      position: relative;
   }
`

const Section = styled.div`
   flex: 1;

   @media screen and (max-width: 640px) {
      flex: 100%;
      margin-bottom: .75rem;
      font-size: .875rem;
   }
`

export const Date = styled(Section)`
`

export const Title = styled(Section)`
   flex: 2;
   
   @media screen and (max-width: 640px) {
      font-size: 1rem;
      font-weight: 600;
      flex: 100%;
   }
`

export const Category = styled(Section)`
   @media screen and (max-width: 640px) {
      flex: 1;
      margin-bottom: 0;
   }

   span {
      display: inline-block;
      padding: .3rem .8rem;
      background-color: red;
      color: white;
   }
`

export const Value = styled(Section)`
   @media screen and (max-width: 640px) {
      flex: 1;
      text-align: right;
      margin-bottom: 0;
   }
`

export const RemoveItem = styled(FaTimes)`
   cursor: pointer;
   opacity: .3;
   transition: .3s;

   &:hover {
      opacity: 1;
   }

   @media screen and (max-width: 640px) {
      position: absolute;
      right: 1rem;
      top: 1rem;
   }
`