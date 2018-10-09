import blue from '@material-ui/core/colors/blue'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import * as React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import configureStore from '../lib/store/configureStore'
import App from './App'

const theme = createMuiTheme({
  palette: {
    primary: { main: blue[900] },
    secondary: { main: '#11cb5f' }
  },
  typography: {
    suppressDeprecationWarnings: true
  }
})

const store = configureStore()

const Root = () => (
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      </React.Fragment>
    </Router>
  </Provider>
)

export default Root
