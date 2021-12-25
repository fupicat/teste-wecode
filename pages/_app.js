import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
body {
  background: #EEEDF2;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  font-family: "Poppins", sans-serif;
}
`

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
