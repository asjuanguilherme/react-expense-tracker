import styled, { css } from 'styled-components'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export const Wrapper = styled.div`
   user-select: none;
   display: flex;
   align-items: center;
   justify-content: space-between;

   padding: .5rem .8rem;
   border-radius: 2rem;

   color: ${ props => props.theme.colors.primary };
   background-color: white;
`

export const DateTitle = styled.div`
   font-size: 1.1rem;
   margin: 0 1rem;
`

const ArrowStyles = css`
   display: flex;
   align-items: center;
   justify-content: center;
  
   height: 1.5rem;
   width: 1.5rem;
   cursor: pointer;

   transition: .3s;
`

export const NextButton = styled(FaChevronRight)`
   ${ArrowStyles}
   &:hover { transform: translateX(.3rem); }
`

export const PrevButton = styled(FaChevronLeft)`
   ${ArrowStyles}
   &:hover { transform: translateX(-.3rem); }
`