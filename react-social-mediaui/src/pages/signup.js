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
import { signupUser } from '../redux/actions/userActions';

const styles = (theme) => ({
  ...theme.spreadThis
});


export class Signup extends Component {

  state = {
    email: '',
    password: '',
    confirmPassword: '',
    handle: '',
    loading: false,
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


    const newUserData = {
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      handle: this.state.handle
    }
    this.props.signupUser(newUserData, this.props.history);

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
            Signup
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
            <TextField id="confirmPassword" name="confirmPassword" type="password" label="Confirm Password" className={classes.textField}
              vaue={this.state.confirmPassword}
              onChange={this.handleChange}
              fullWidth
              helperText={errors.confirmPassword}
              error={errors.confirmPassword ? true : false}
            />
            <TextField id="handle" name="handle" type="text" label="Handle" className={classes.textField}
              vaue={this.state.handle}
              onChange={this.handleChange}
              fullWidth
              helperText={errors.handle}
              error={errors.handle ? true : false}
            />
            {errors.general && (
              <Typography variant="body2" className={classes.customError}>{errors.general}</Typography>
            )}
            <Button type="submit" variant="contained" color="primary" className={classes.button}
              disabled={loading}
            >
              Signup
              {
                loading && (
                  <CircularProgress size={30} className={classes.progress} />
                )
              }
            </Button>
            <br />
            <small>Already have an account? login <Link to="/login">here</Link></small>
          </form>
        </Grid>
        <Grid item sm />
      </Grid>
    )
  }
}

Signup.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  ui: PropTypes.object.isRequired,
  signupUser: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  user: state.user,
  ui: state.ui
})
const mapActionsToProps = {
  signupUser
}
export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(Signup));
