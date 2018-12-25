import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Signin } from '../components/store/actions/auth.actions';
import swal from 'sweetalert';


class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handleOnChangeEmail = this.handleOnChangeEmail.bind(this)
    this.handleOnChangePassword = this.handleOnChangePassword.bind(this)
    this.login = this.login.bind(this)
  }

  handleOnChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  handleOnChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  login = () => {
    if(this.state.email == "" && this.state.password == "") {
      swal({
        title: "Please FillOut All Fields!",
        icon: "warning",
        buttons: "Ok!"
      })
    }

    else {
      let obj = {
        email: this.state.email,
        password: this.state.password
      }
      this.props.Signin(obj)

      swal({
        title: "Successfull Login!",
        icon: "success",
        buttons: "Ok!"
      })
    }

    this.setState({
      email: '',
      password: ''
    })
  }


    render() {
        return(
            <div>
                  <Paper style={{backgroundColor: 'darkgrey',height: 350,width: 400, marginLeft: 500, marginTop:100, opacity: 0.9, borderWidth: 1, borderColor: 'black', borderStyle: 'solid'}}>
      <CardContent>
        <Typography  color="textSecondary">
          <h2>Login</h2>
        </Typography>
        <Typography variant="headline" component="h2">
          
        </Typography>
        <Typography color="textSecondary">
        
        </Typography>
        <Typography component="p">
       
        <form noValidate autoComplete="off">
        <TextField
          id="name"
          label="Email Address"
          margin="normal"
          value={this.state.email}
          onChange={this.handleOnChangeEmail}
          style={{width: 300}}
        />
        <br />
        <TextField
          id="uncontrolled"
          label="Password"
          margin="normal"
          type="password"
          value={this.state.password}
          onChange={this.handleOnChangePassword}
          style={{width: 300}}
        />
        </form>
        <p>Create An Account? <Link to='/register'>Signup </Link> </p>
        </Typography>
      </CardContent>
      <CardActions>

      <Button onClick={this.login} style={{marginLeft: 150,backgroundColor: 'grey',borderWidth: 1, borderColor: 'black', borderStyle: 'solid'}} variant="contained" color="primary">
        Login
      </Button>
    
      </CardActions>
    </Paper>
            </div>
        )
    }
}

const mapStateToProp = (state) => {
  return({
    auth: state.auth
  })
}

const mapDispatchToProp = (dispatch) => {
  return({
    Signin: (obj) => {
      dispatch(Signin(obj))
    }
  })
}

export default connect(mapStateToProp, mapDispatchToProp) (Login)