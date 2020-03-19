import React from 'react'
import { makeStyles, Link } from '@material-ui/core'
import Image from '../../img/banner.jpg'; // Import using relative path
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuitcase, faSyncAlt, faUsers } from '@fortawesome/free-solid-svg-icons'

import { fade } from '@material-ui/core/styles/colorManipulator';
const useStyles = makeStyles(theme => ({
  ...theme.general,
  main: {
    position: 'relative',
    color: '#fff',
    backgroundImage: `url(${Image})`,
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      // background: fade('#000', .65),
      background: 'linear-gradient(to left, #000, #111)',
      opacity: '.65'
    },
  },
  bannerData: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '6rem 0',
  },
  bannerTitle: {
    margin: '0 0 .5em',
    textAlign: 'center',
    width: '100%',
    fontSize: '2.2rem',
    fontWeight: '900',
    position: 'relative',
  },
  button: {
    padding: '10px 30px',
    fontSize: '16px',
    marginTop: '1rem',
    marginBottom: '4rem',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    alignItems: 'center',
    textAlign: 'center',
    [theme.breakpoints.between('sm', 'xl')]: {
      marginLeft: '32px',
    }
  },
  icon: {
    padding: '10px',
    fontSize: '42px',
    border: '1px solid white',
    transition: 'all .3s',
    '&:hover': {
      transform: 'scale(1.1)'
    }
  },
  h1: {
    marginBottom: 0
  },
  p: {
    color: '#fff'
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
    margin: '0 4rem',
    [theme.breakpoints.between('sm', 'xl')]: {
      flexDirection: 'row'
    }
  }
}));



const Presentation = () => {

  const { main, bannerData, bannerTitle, highlighted, button, card, icon, h1, p, container } = useStyles();

  return (
    <section className={main}>
      <div className={bannerData}>
        <h2 className={bannerTitle}>Explora, aprende, aplica</h2>
        <Link to='/'>
          <Button
            variant='contained'
            color='secondary'
            className={`${highlighted} ${button}`}>
            Ver Planes
          </Button>
        </Link>

        <div className={container}>
          <div className={card}>
            <FontAwesomeIcon className={icon} icon={faSuitcase} />
            <h1 className={h1}>Crece como profesional</h1>
            <p className={p}>2 de cada 3 personas consiguieron y emprendieron su negocio gracias a Miscursosbaratos.com</p>
          </div>
          <div className={card}>
            <FontAwesomeIcon className={icon} icon={faSyncAlt} />
            <h1 className={h1}>Aplica tu experiencia</h1>
            <p className={p}>Nos enfocamos en lo más importante. 80% de nuestros estudiantes pone en práctica lo que aprende en pocos días.</p>
          </div>
          <div className={card}>
            <FontAwesomeIcon className={icon} icon={faUsers} />
            <h1 className={h1}>Únete a la familia Premium</h1>
            <p className={p}>Nadie se queda con dudas. Recibe todo el sorporte del equipo de ventas para poder adquirir su material.</p>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Presentation
