import React from 'react'
import { makeStyles, Container, Box, CardHeader } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';



const useStyles = makeStyles(theme => ({
  ...theme.general,
  root: {
    flexGrow: 1,
    padding: '0 0.5rem',
    margin: '0',
    [theme.breakpoints.between('sm', 'xl')]: {
      margin: '5px',
      padding: '0 28px',
      justifyContent: 'space-around'
    },
    [theme.breakpoints.up('md')]: {
      padding: '0 64px',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '0 222px',
    },
  },

  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  h1: {
    textAlign: 'center',
    fontSize: '36px',
    fontWeight: '700'
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    color: '#7a7a7a',
    textAlign: 'center',
    background: '#f7f7f7'
  },
  item: {
    '&:not(:last-child)': {
      borderBottom: '1px solid #ddd',
      paddingBottom: '0.5rem',
      marginBottom: '1rem'
    }
  },
  cardContainer: {
    alignSelf: "center", justifyContent: 'center',
    [theme.breakpoints.between('sm', 'xl')]: {
      flexBasis: '31.5%',
      maxWidth: '33.3%'
    },
    [theme.breakpoints.up('md')]: {
      flexBasis: '32.5%',
    },
  },
  offer: {
    textAlign: 'center',
    left: '0',
    width: '200%',
    transform: 'translateY(-50%) translateX(-50%) translateX(35px) rotate(-45deg)',
    marginTop: '23px',
    marginLeft: '-4px',
    fontSize: '13px',
    lineHeight: '2',
    fontWeight: '800',
    textTransform: 'uppercase',
    background: '#61ce70',
    color: '#fff'
  }
}))
const MemberShip = () => {
  // const cls = useStyles();
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = event => {
    setSpacing(Number(event.target.value));
  };
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Box display="flex" flexDirection="column" flexWrap='nowrap' justifyContent="center" style={{ padding: '6rem 0' }}>
      <h1 className={classes.h1}>Elige tu membresía preferida</h1>
      <Grid container justify="center" className={classes.root} spacing={spacing} item xs={12}>
        {[0, 1, 2].map((index, value) => (
          <Grid className={classes.cardContainer} key={value} >
            <Card className={classes.card}>
              <CardContent style={{ padding: '20px 0', position: 'relative', color: index === 1 ? 'white' : '#000', background: index === 1 ? '#54595f' : '#F4F4F4', width: '100%' }}>
                <Typography style={{ fontWeight: '700' }} variant="h5" component="h2">
                  Básico
                    </Typography>
                <Typography variant="caption" component="p" >
                  Suscripción por días
                      </Typography>
                <div style={{
                  position: 'absolute',
                  top: '0',
                  left: 'auto',
                  right: '0',
                  transform: 'rotate(90deg)',
                  width: '150px',
                  overflow: 'hidden',
                  height: '150px',
                }}>
                  <Typography className={classes.offer

                  } variant="caption" component="div" >
                    OFERTA
                  </Typography>
                </div>
              </CardContent>
              <CardContent>
                <Box display="flex" justifyContent="center" style={{ padding: '40px 0' }}>
                  <Typography variant="body2" component="span">
                    $
                      </Typography>
                  <Typography style={{ lineHeight: '.8', fontWeight: '800' }} variant="h3" component="span">
                    15
                      </Typography>
                  <Typography style={{ alignSelf: 'flex-end' }} variant="body2" component="span">
                    / x 3 días
                      </Typography>
                </Box>

                <Typography className={classes.item} color="textSecondary" variant="body2">
                  <CheckCircleOutlineIcon />
                      Acceso disponible a 3 cursos
                    </Typography>

                <Typography className={classes.item} color="textSecondary" variant="body2">
                  <CheckCircleOutlineIcon />
                      Paga con Paypal o en efectivo
                    </Typography>

                <Typography className={classes.item} color="textSecondary" variant="body2">
                  <CheckCircleOutlineIcon />
                      Acceso a soporte de venta 24/7 via chat
                    </Typography>
                {index === 1 &&
                  <Typography className={classes.item} color="textSecondary" variant="body2">
                    <CheckCircleOutlineIcon />
                      Acceso a soporte de venta 24/7 via chat
                    </Typography>
                }
              </CardContent>
              <Button style={{ padding: '12px 30px' }} variant={index === 1 ? "contained" : "outlined"} color="secondary" className={index === 1 ? classes.highlighted : ""}>
                {index === 1 ? "VUELVETE PREMIUM" : "EMPIEZA AHORA"}
              </Button>
              <Typography style={{ marginTop: '15px', marginBottom: '30px' }} variant="caption">No se renueva automaticamente</Typography>
              {/* <CardActions style={{ justifyContent: "center" }}>
                    <Button size="small">Learn More</Button>
                  </CardActions> */}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>

  )
}

export default MemberShip;
