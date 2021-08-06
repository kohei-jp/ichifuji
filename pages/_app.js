import React from 'react';
import '../styles/globals.css'
import '../styles/utils.module.css'
import { ThemeProvider } from '@material-ui/core'
import theme from '../styles/theme/muiTheme.js'
// すべてのPagesに共通するトップレベルのCompornents
export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}