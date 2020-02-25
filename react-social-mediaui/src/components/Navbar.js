import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MyButton from '../util/MyButton';
import PostScream from './scream/PostScream';
import Notifications from './Notifications';
// MUI stuff
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
// Icons
import HomeIcon from '@material-ui/icons/Home';
import styled from 'styled-components'

export const StyledAppBar = styled(AppBar)`
    align-items:center;
`;

class Navbar extends Component {
  render() {
    const { authenticated } = this.props;
    return (
      <StyledAppBar>
        <Toolbar className="nav-container">
          {authenticated ? (
            <Fragment>
              <PostScream />
              <Link to="/">
                <MyButton tip="Home">
                  <HomeIcon />
                </MyButton>
              </Link>
              <Notifications />
            </Fragment>
          ) : (
              <Fragment>
                <Button color="inherit" component={Link} to="/login">
                  Login
              </Button>
                <Button color="inherit" component={Link} to="/">
                  Home
              </Button>
                <Button color="inherit" component={Link} to="/signup">
                  Sign Up
              </Button>
              </Fragment>
            )}
        </Toolbar>
      </StyledAppBar>
    );
  }
}

Navbar.propTypes = {
  authenticated: PropTypes.bool.isRequired
};

const mapStateToProps = ({ user: { authenticated } }) => ({
  authenticated
});

export default connect(mapStateToProps)(Navbar);