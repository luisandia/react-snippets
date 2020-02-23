import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const StyledLink = styled(Link)`
  color:#eee;
  text-decoration:none;

`;
export const StyledAppBar = styled(AppBar)`
    align-items:center;
`;
export class Navbar extends Component {
  render() {
    return (
      <StyledAppBar>
        <Toolbar >
          <StyledLink to={'/login'}>
            <Button color="inherit" >Login</Button>
          </StyledLink>
          <StyledLink to={'/'}>
            <Button color="inherit">Home</Button>
          </StyledLink>
          <StyledLink to={'/signup'}>
            <Button color="inherit">SignUp</Button>
          </StyledLink>
        </Toolbar>
      </StyledAppBar>

    )
  }
}

export default Navbar
