import React from 'react'
import Image from '../../img/courses.jpg'; // Import using relative path
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  ...theme.general,
  container: {
    fontSize: '16px',
    color: 'white',
    alignItems: 'center',
    display: 'flex',
    padding: '0 25px',
    background: '#121212',
    minHeight: '612px',
    justifyContent: 'center',
    flexDirection: 'column-reverse',
    [theme.breakpoints.between('sm', 'xl')]: {
      flexDirection: 'row',
      padding: '0 70px',
      minHeight: '100vh',
    }
  },
  h1: {
    textAlign: 'center',
    fontSize: '20px',
    [theme.breakpoints.between('sm', 'xl')]: {
      flexDirection: 'row',
      padding: '0 70px',
      fontSize: '35px',
    }
  },
  svg: {
    stroke: 'var(--highlighted)',
    strokeWidth: 9,
    fill: 'none',
    strokeDasharray: 1500,
    animation: 'example 10s infinite',
  },
  svgFlat: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 'calc(100% + 20px)',
    height: 'calc(100% + 20px)',
    transform: 'translate(-50%,-50%)',
    overflow: 'visible',
  },
  img:{
     width: '50%', display: 'block', height: 'auto' 
  }
}))
const Logo = () => {
  const classes = useStyles();

  return (
    <svg className={`${classes.svg} ${classes.svgFlat}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"></path></svg>
  )
}

const BannerCourse = () => {
  const classes = useStyles();
  console.log(classes.colors)
  return (
    <section className={classes.container}>
      <div style={{ alignContent: 'center' }}>
        <h1 className={classes.h1}>Accede a <span style={{position:'relative'}}>todos los cursos <Logo /></span> </h1>
        <p>Tienes +500 cursos para mantenerte actualizado. ¡Cursos nuevos todas las semanas!</p>
      </div>
      <img className={classes.img}  src="https://miscursosbaratos.com/wp-content/uploads/2020/01/Bruno-sanders.jpg" alt="" srcSet="https://miscursosbaratos.com/wp-content/uploads/2020/01/Bruno-sanders.jpg 653w, https://miscursosbaratos.com/wp-content/uploads/2020/01/Bruno-sanders-300x246.jpg 300w, https://miscursosbaratos.com/wp-content/uploads/2020/01/Bruno-sanders-600x492.jpg 600w" sizes="(max-width: 653px) 100vw, 653w" />
    </section>
  )
}

export default BannerCourse
