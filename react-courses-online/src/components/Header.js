import React, { useState, useContext } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import PropTypes from 'prop-types';
import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PersonIcon from '@material-ui/icons/Person';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@material-ui/core';
import { LayoutContext } from '../context/layoutCtx';
import headerStyle from './headerStyle';


const useStyles = makeStyles(headerStyle);

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({ target: window });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

export const Header = (props) => {
  const classes = useStyles();
  const [show, setShow] = useState(false)
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.between('sm', 'xl'));
  const { menu, menuIndex, setMenuIndex } = useContext(LayoutContext);
  const toggleDrawer = () => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setShow(!show);
  };
  const fullList = show => (
    <div
      role="presentation"
      onClick={toggleDrawer()}
      onKeyDown={toggleDrawer()}
      className={`${classes.show} ${show ? 'hidden' : ''}`}
    >
      <List >
        {menu.map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  const setMenu = (parameter) => (event) => {
    setMenuIndex(parameter)
  }

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar elevation={0} >
          <Toolbar className={classes.toolbar}>
            <Typography variant="h5" className={classes.title}>
              <span className="mytext">tuscursos</span>baratos<span style={{ color: 'var(--yellowColor' }}>.</span>com
            </Typography>
            <div className={classes.rightMenu}>
              {
                matches && menu.map((text, index) => (
                  <Link to={"/"} onClick={setMenu(index)} key={index}><Typography variant="button" className={index === menuIndex ? "active" : ""}>
                    {text}
                  </Typography></Link>
                ))
              }
              {
                !matches &&
                <Badge color="secondary" badgeContent={0} showZero>
                  <ShoppingCartOutlinedIcon />
                </Badge>
              }
              <Button className={classes.highlighted} variant="contained"><PersonIcon />Ingresar</Button>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer()}>
                <MenuIcon />
              </IconButton>
              {
                matches &&
                <>
                  <span>$0.00</span><Badge color="secondary" badgeContent={0} showZero>
                    <ShoppingCartOutlinedIcon />
                  </Badge>
                </>
              }
            </div>
          </Toolbar>
          {fullList(show)}
        </AppBar>
      </HideOnScroll>
      <Toolbar id="back-to-top-anchor" />
    </>
  )
}
