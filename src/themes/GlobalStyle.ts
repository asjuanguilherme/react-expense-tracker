import { createGlobalStyle } from 'styled-components'
import { light } from './themes'

const GlobalStyle = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      outline: 0;
      border: 0;
      box-sizing: border-box;

      font-family: Montserrat, sans-serif;
      font-weight: 500;
   }
   
   html,body, #root {
      height: 100%;
      background-color: ${light.colors.background};
      color: ${light.colors.primaryDarken}
   }

   #root {
   }
`

export default GlobalStyle
