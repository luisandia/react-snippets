import React from 'react';
import { Header } from './components/Header';
import { MembershipPage } from './pages/MembershipPage';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#fff',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary:{main:'#4054B2'},
    // secondary: {
    //   light: '#0066ff',
    //   main: '#0044ff',
    //   // dark: will be calculated from palette.secondary.main,
    //   contrastText: '#ffcc00',
    // },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  '@global': {
    '.MuiBackdrop-root': {
      backgroundColor: 'rgba(0, 0, 0, 0)'
    },
  },
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    // fontSize: 14,
    // htmlFontSize: 10,

  },
  general:{
    highlighted: {
      backgroundColor: 'var(--highlighted)',
      color: '#eee'
    },
  }
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <Header />
        <Switch>
          <Route exact path="/">
            <MembershipPage />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
