
import '../styles/globals.css'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../theme'
export default function App({ Component, pageProps }) {
  return (
    <>
    <ThemeProvider theme={lightTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
    </>
  )
}
