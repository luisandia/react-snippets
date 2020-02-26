import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import jwtDecode from 'jwt-decode';
import { Provider } from 'react-redux';
import store from './redux/store';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import AuthRoute from './util/AuthRoute';
import { SET_AUTHENTICATED } from './redux/types';
import { logoutUser, getUserData } from './redux/actions/userActions';
import axios from 'axios';

// pages
import Home from './pages/home';
import Signup from './pages/signup';
import Login from './pages/login';
import user from './pages/user';

import Navbar from './components/layout/Navbar';
import themeFile from './util/theme';


const theme = createMuiTheme(themeFile);
const token = localStorage.getItem('FBIdToken');
axios.defaults.baseURL =
  'https://us-central1-socialape-96265.cloudfunctions.net/api';


if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = '/login';
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common['Authorization'] = token;
    store.dispatch(getUserData());
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <AuthRoute exact path="/login" component={Login} />
              <AuthRoute exact path="/signup" component={Signup} />
              <Route exact path="/users/:handle" component={user} />
              <Route
                exact
                path="/users/:handle/scream/:screamId"
                component={user}
              />
            </Switch>
          </div>
        </Router>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
