import styled, { css } from 'styled-components'

export const Board = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;

   padding: 1.2rem;
   background-color: white;
   border-radius: 1.5rem;
`

export const Title = styled.h2`
   font-size: 1.2rem;
   font-weight: bold;
`

const BigValue = css`
   font-size: 3.5rem;

   @media screen and (max-width: 991px) { font-size: 2rem; }

   @media screen and (max-width: 768px) { font-size: 1.5rem; }

   @media screen and (max-width: 640px) { font-size: 2.5rem; }
`

export const Value = styled.span<{ bigger: boolean }>`
   flex: 1;
   color: ${ props => props.theme.colors.primary };
   padding: 1.5rem 0;
   font-size: 4rem;
   font-weight: bolder;

   @media screen and (max-width: 991px) { font-size: 2.5rem; }

   @media screen and (max-width: 768px) { font-size: 2rem; }

   @media screen and (max-width: 640px) { font-size: 3rem; }

   ${ props => props.bigger? BigValue : '' }

   &::before {
      content: 'R$';
      font-size: 2rem;
      margin-right: .3rem;
      display: inline-block;
   }
`

const StatusPositive = css`
   background-color: #DEFFED;
   color: #27C26E;
`

const StatusNegative = css`
   background-color: #FFDEEA;
   color: #C22743;
`

export const Status = styled.span<{ status: 'positive' | 'negative' | 'neutral'}>`
   padding: .5rem;
   font-size: .875rem;
   font-weight: bold;
   background-color: red;
   border-radius: .5rem;

   ${ props => props.status === 'positive' ? StatusPositive : StatusNegative }
`