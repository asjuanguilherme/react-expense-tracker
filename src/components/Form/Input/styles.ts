import styled, { css, keyframes } from 'styled-components'

export const Wrapper = styled.div`
   position: relative;
`

export const Label = styled.label`
   display: block;
   padding-left: .3rem;
   padding-bottom: .5em;
`

const InputError = css`
   &, &:focus, &:hover {
      border-color: ${ props => props.theme.colors.danger } ;
   }
`

export const Input = styled.input<{ error: string | null; }>`
   width: ${ props => props.width ? props.width : '100%' };
   padding: 0 1.2em;
   height: 2.5rem;
   
   border: .15em solid transparent;
   border-radius: 1em;

   font-size: .875rem;
   font-family: inherit;
   
   background-color: #ECE9FF;

   transition: border .2s;

   &::placeholder {
      opacity: .45;
      font-style: italic;
      font-weight: lighter;
   }

   &:focus {
      background-color: #ECE9FF;
      border-color: #7070FF;
   }

   ${ props => props.error ? InputError : ''}
`

const showError = keyframes`
   from {
      transform: translateX(-1.5rem) translateY(130%);;
      opacity: .2;
   }

   to {
      transform: translateX(0) translateY(130%);;
      opacity: 1;
   }
`

export const Error = styled.span`
   display: flex;
   width: max-content;
   align-items: center;
   font-size: .75rem;

   border-radius: 1rem;
   position: absolute;
   left: .3rem;
   bottom: 0;
   transform: translateY(130%);

   color: ${ props => props.theme.colors.danger } ;
   
   animation: ${showError} .3s;

   svg {
      margin-right: 4px;
      font-size: .9rem;
   }

`