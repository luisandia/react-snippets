import React, { useState } from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  h2: {
    fontSize: 25,
    fontWeight: 700,
    lineHeight: '1.2em',
    textTransform: "capitalize",
    alignSelf:'center'
  },
}));


const expanstionList = [
  {
    title: '¿Que obtengo con la membresia?',
    content: 'Vas a poder tener acceso ilimitado a todos nuestros cursos del catálogo, así como beneficios y servicios exclusivos para la comunidad Premium.'
  },
  {
    title: '¿la cantidad de descargas se refiere a un vídeo de algún curso a cuenta como una descarga el hecho de descargar un curso completo?',
    content: 'Se refiere a la cantidad de descarga cuenta por curso completo'
  },
  {
    title: '¿Entonces si pago 180.00 dolares puedo descargar Cursos de mi interes?',
    content: '¡Correcto! tienes el control de descargar los cursos que tu prefieres'
  },
  {
    title: '¿Por que los precios son baratos?',
    content: 'Sabemos su desconfianza, el material que brindamos es 100% original, así mismo temporal, por que luego remplantearemos los precios según la demanda. ¡Espero que aproveche esta oportunidad!'
  },
]

const PanelSummary = ({ title }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false)
  const changeExpanded = () => (event) => {
    setExpanded(!expanded)
  }
  return (
    <ExpansionPanelSummary
      onClick={changeExpanded()}
      style={{ color: '#fff' }}
      expandIcon={
        expanded
          ? <ArrowDropUpIcon style={{ color: '#fff' }} />
          : <ArrowRightIcon style={{ color: '#fff' }} />
      }
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography className={classes.heading}>{title}</Typography>
    </ExpansionPanelSummary>
  )
}

const FrequentlyAsks = () => {
  const classes = useStyles();



  return (
    <Box style={{padding:'0 350px'}} display="flex" flexDirection="column" bgcolor="#000" color="#fff">
      <Typography className={classes.h2} component="h2">preguntas frecuentes</Typography>
      {expanstionList.map((item, index) => (
        <ExpansionPanel key={index} style={{borderBottom: '1px solid white' ,textJustify:"center", display:"flex", flexDirection:"column", background: '#000', color: "inherit" }}>
          <PanelSummary title={item.title} />
          <ExpansionPanelDetails>
            <Typography>
              {item.content}
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </Box>
  )
}

export default FrequentlyAsks
