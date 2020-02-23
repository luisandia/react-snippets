import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import Scream from '../components/Scream';

export class Home extends Component {

  state = {
    screams: null
  }
  componentDidMount() {
    axios.get('/screams')
      .then(res => {
        console.log(res.data);
        this.setState({ screams: res.data })
      })
      .catch(err => console.error(err))
  }

  render() {
    let recentScreamsMarkup = this.state.screams ? (
      this.state.screams.map(scream => <Scream key={scream.screamId} scream={scream}>{scream.body}</Scream>)
    ) : (
        <p>Loading...</p>
      );

    return (
      <Grid container spacing={4}>
        <Grid item sm={8} xs={12}>
          {recentScreamsMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis voluptatibus accusantium ipsum distinctio sequi hic quia laboriosam voluptates iste. Possimus corrupti nisi placeat mollitia veritatis exercitationem temporibus error obcaecati laborum!</p>
        </Grid>

      </Grid>
    )
  }
}

export default Home
