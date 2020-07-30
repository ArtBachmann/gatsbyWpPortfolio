import { createMuiTheme } from '@material-ui/core/styles'
import { blueGrey, purple } from '@material-ui/core/colors'


const theme = createMuiTheme({
  palette: {
    primary: {
      light: purple[300],
      main: purple[500],
      dark: purple[700],
    },
    secondary: {
      light: blueGrey[300],
      main: blueGrey[500],
      dark: blueGrey[700],
    },
    type: 'dark'
  },
  typography: {
    fontFamily: ['Open Sans', 'Montserrat', 'sans-serif'].join(','),
    h1: {
      fontWeight: 500,
      fontSize: '1.8rem'
    },
    h2: {
      fontWeight: 500,
      fontSize: '1.8rem'
    },
    h3: {
      fontWeight: 500,
      fontSize: '1.6rem'
    },
    h4: {
      fontWeight: 500,
      fontSize: '1.4rem'
    },
  },
  overrides: {
    MuiButton: {
      contained: {
        primary: {
          backgroundColor: '#000000'
        },
        secondary: {
          backgroundColor: blueGrey[900]
        }
      }
    },
    MuiToolbar: {
      regular: {
        minHeight: 64,
      }
    },
    MuiPaper: {
      backgroundColor: '#212020',
    },
    MuiTypography: {
      colorTextSecondary: {
        color: '#dcdcdc'
      }
    },
  },
})

export default theme 