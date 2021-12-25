import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@media screen and (max-width: 1366px) {
  :root {
    font-size: 70%;
  }
}

@media screen and (max-width: 1024px) {
  :root {
    font-size: 50%;
  }
}

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
