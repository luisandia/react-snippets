import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const StyledAppBar = styled(AppBar)`
    align-items:center;
`;
export class Navbar extends Component {
  render() {
    return (
      <StyledAppBar>
        <Toolbar >
          <Button color="inherit" component={Link} to="/login" >Login</Button>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/signup">SignUp</Button>
        </Toolbar>
      </StyledAppBar>

    )
  }
}

export default Navbar
