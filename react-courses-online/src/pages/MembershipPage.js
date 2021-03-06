import React from 'react'
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import Presentation from '../components/Membership/Presentation';
import BannerCourse from '../components/Membership/BannerCourse';
import MemberShip from '../components/Membership/MemberShip';
import FrequentlyAsks from '../components/Membership/FrequentlyAsks';


const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};


export const MembershipPage = (props) => {
  return (
    <>
      {/* <Presentation />
      <BannerCourse />
      <MemberShip /> */}
      <FrequentlyAsks />
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti et neque aut, repudiandae nisi debitis, hic molestias dicta sapiente, vel natus magnam ipsam doloremque quasi fugit quaerat veniam dolorem similique.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti et neque aut, repudiandae nisi debitis, hic molestias dicta sapiente, vel natus magnam ipsam doloremque quasi fugit quaerat veniam dolorem similique.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti et neque aut, repudiandae nisi debitis, hic molestias dicta sapiente, vel natus magnam ipsam doloremque quasi fugit quaerat veniam dolorem similique.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti et neque aut, repudiandae nisi debitis, hic molestias dicta sapiente, vel natus magnam ipsam doloremque quasi fugit quaerat veniam dolorem similique.</div>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  )
}
