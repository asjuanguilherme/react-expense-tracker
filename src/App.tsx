import { ThemeProvider } from 'styled-components'
import { light } from './themes/themes'
import GlobalStyle from './themes/GlobalStyle'

import Home from './pages/home/index'

const App = () => {
  return (
    <ThemeProvider theme={ light }>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  )
}

export default App
