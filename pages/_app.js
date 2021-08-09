import React from 'react';
import '../styles/globals.css'
import '../styles/utils.module.css'
import '../styles/swiper.css'
import { ThemeProvider } from '@material-ui/core'
import theme from '../styles/theme/muiTheme.js'
// すべてのPagesに共通するトップレベルのCompornents
export default function App({ Component, pageProps }) {

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}