import React, { Component } from 'react'
import styled from 'styled-components'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';


const styles = {
  card: {
    display: 'flex',
    marginBottom: 20
  },
  image: {
    minWidth: 200,
    objectFit: 'cover'
  }
};

class Scream extends Component {


  render() {

    dayjs.extend(relativeTime);


    const { classes, scream: { body, createdAt, userImage, userHandle, screamId, likeCount, commentCount } } = this.props;
    return (

      <Card className={classes.card}>
        <CardMedia image={userImage}
          title="Profile image"
          className={classes.image}
        />
        <CardContent >
          <Link to={`/ users / ${userHandle} `}><Typography variant="h5">{userHandle}</Typography></Link>
          <Typography variant="body2">{dayjs(createdAt).fromNow()}</Typography>
          <Typography variant="body1">{body}</Typography>
        </CardContent>

      </Card>
    )
  }
}

export default withStyles(styles)(Scream)