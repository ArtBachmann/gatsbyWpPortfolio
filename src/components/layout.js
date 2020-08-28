import React from "react"
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../theme'
import Header from '../components/header/Header'


const Layout = props => {
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <main>
          {props.children}
        </main>
      </MuiThemeProvider>
    </>
  )
}

export default Layout
