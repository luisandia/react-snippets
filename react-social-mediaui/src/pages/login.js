import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import AppIcon from '../images/favicon.ico';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

// redux stuff

import { connect } from 'react-redux';
import { loginUser } from '../redux/actions/userActions';

const styles = (theme) => ({
  ...theme.spreadThis
})


export class Login extends Component {

  state = {
    email: '',
    password: '',
    errors: {}
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.ui.errors) {
      this.setState({
        errors: nextProps.ui.errors
      })
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.loginUser(userData, this.props.history);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }


  render() {
    const { classes, ui: { loading } } = this.props;
    const { errors } = this.state;
    return (
      <Grid container className={classes.form}>
        <Grid item sm />
        <Grid item sm >
          <img src={AppIcon} alt="monkey" className={classes.image} />
          <Typography variant="h2" className={classes.pageTitle}>
            Login
          </Typography>
          <form noValidate onSubmit={this.handleSubmit}>
            <TextField id="email" name="email" type="email" label="Email" className={classes.textField}
              vaue={this.state.email}
              onChange={this.handleChange}
              fullWidth
              helperText={errors.email}
              error={errors.email ? true : false}
            />
            <TextField id="password" name="password" type="password" label="Password" className={classes.textField}
              vaue={this.state.password}
              onChange={this.handleChange}
              fullWidth
              helperText={errors.password}
              error={errors.password ? true : false}
            />
            {errors.general && (
              <Typography variant="body2" className={classes.customError}>{errors.general}</Typography>
            )}
            <Button type="submit" variant="contained" color="primary" className={classes.button}
              disabled={loading}
            >
              Login
              {
                loading && (
                  <CircularProgress size={30} className={classes.progress} />
                )
              }
            </Button>
            <br />
            <small>dont have and account? sign up <Link to="/signup">here</Link></small>
          </form>
        </Grid>
        <Grid item sm />
      </Grid>
    )
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  ui: PropTypes.object.isRequired,
}

const mapStateToPros = (state) => ({
  user: state.user,
  ui: state.ui
});

const mapActionsToProps = {
  loginUser
}

export default connect(mapStateToPros, mapActionsToProps)(withStyles(styles)(Login));
