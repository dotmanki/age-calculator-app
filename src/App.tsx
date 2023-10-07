import AgeCalculator from '@components/AgeCalculator/AgeCalculator'
import Main from '@components/Main/Main'
import { GlobalStyles } from '@utils/globalStyles'
import { theme } from '@utils/theme'
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Main>
          <AgeCalculator />
        </Main>
      </ThemeProvider>
    </>
  )
}

export default App
