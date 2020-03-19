const headerStyle = theme => ({
  ...theme.general,
  show: {
    width: '100%',
    backgroundColor: 'var(--primaryColor)',
    maxHeight: '0',
    overflow: 'hidden',
    position: 'absolute',
    transition: 'max-height .2s ease-out',
    '&.hidden': {
      maxHeight: '500px',
      transition: 'max-height .5s ease-in',
    }
  },
  menuButton: {
    padding: 0,
    [theme.breakpoints.between('sm', 'xl')]: {
      display: 'none',
    },
  },
  title: {
    flexGrow: 3,
    fontWeight: 'bold',
    "& .mytext": {
      backgroundColor: 'var(--yellowColor)',
      color: 'var(--primaryColor)'
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '1rem',
      flexGrow: 1,
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    // [theme.breakpoints.between('md', 'xl')]: {
    //   margin: '0 100px',
    // },
  },
  rightMenu: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

export default headerStyle;