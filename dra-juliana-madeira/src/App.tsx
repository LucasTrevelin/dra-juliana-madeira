import { ThemeProvider } from 'styled-components'
import { theme } from './global.styled'
import Landing from './pages/Landing/Landing'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Landing />
    </ThemeProvider>
  )
}

export default App
