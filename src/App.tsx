import { ThemeProvider } from 'styled-components'
import { light } from './themes/themes'
import GlobalStyle from './themes/GlobalStyle'
import Home from './pages/home/index'
import GlobalProvider from './context/GlobalContext'

const App = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalProvider>
        <GlobalStyle />
        <Home />
      </GlobalProvider>
    </ThemeProvider>
  )
}

export default App
