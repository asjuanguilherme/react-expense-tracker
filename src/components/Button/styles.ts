import styled, { css, DefaultTheme, ThemeProps } from 'styled-components'

const getVariant = ( props: ThemeProps<DefaultTheme>, variant: string ) => css`
   background-color: ${ props => props.theme.colors[variant] };
   border: 2px solid ${ props => props.theme.colors[variant] };
   color: white;
   text-decoration: none;

   
   
   &:hover {
      color: ${ props => props.theme.colors[variant] };
      background-color: white;
   }
`

const DisabledVariant = css`
   &:hover {
      cursor: default;
      color: white;
      background-color: ${ props => props.theme.colors.disabled }
   }
`

export const Wrapper = styled.button<{ variant: string }>`
   a {
      user-select: none;
      padding: 0 1rem;
      height: 2.5rem;

      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: .8rem;

      font-size: .75rem;
      text-transform: uppercase;
      font-family: Montserrat, sans-serif;
      
      cursor: pointer;
      transition: .2s;

      ${ props => getVariant(props, props.variant ) };

      ${ props => props.variant === 'disabled' && DisabledVariant };

      svg {
         margin-left: .75rem;
      }
   }
`