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
import { Signup } from '../components/store/actions/auth.actions';
import swal from 'sweetalert';
import green from '@material-ui/core/colors/green';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import PreviewPicture from '../components/picturePreview';

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      type: '',
      // picture: 'Please attach a picture',
      // pictureUrl: null
    }
    this.handleOnChangeUsername = this.handleOnChangeUsername.bind(this)
    this.handleOnChangeEmail = this.handleOnChangeEmail.bind(this)
    this.handleOnChangePassword = this.handleOnChangePassword.bind(this)
    this.handleOnChangeConfirmPassword = this.handleOnChangeConfirmPassword.bind(this)
    this.handleOnChangeType = this.handleOnChangeType.bind(this)
    // this.handleOnChangePicture = this.handleOnChangePicture.bind(this)
    this.Register = this.Register.bind(this)
  }

  // handleOnChangePicture(e) {
  //   let reader = new FileReader();
  //   let file = e.target.files[0];
  //   console.log(file);
  //   reader.onloadend = () => {
  //     this.setState({
  //       picture: file,
  //       pictureUrl:reader.result
  //     })
  //   }
  //   reader.readAsDataURL(file)
  // }

  handleOnChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
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

  
  handleOnChangeConfirmPassword(e) {
    this.setState({
      confirmPassword: e.target.value
    })
  }

  
  handleOnChangeType(e) {
    this.setState({
      type: e.target.value
    })
  }

  Register = () => {
    if(this.state.username == "" && this.state.email == "" && this.state.password == "") {
      swal({
        title: "Please FillOut All Fields!",
        icon: "warning",
        buttons: "Ok!"
      })
    }

    else {
      let obj = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        confirmPassword: this.state.confirmPassword,
        type: this.state.type,
        // picture: this.state.picture,
        // pictureUrl: this.state.pictureUrl
      }
      this.props.Signup(obj)
      swal({
        title: "Successfull Register!",
        icon: "success",
        buttons: "Ok!"
      })
    }

    this.setState({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      type: '',
      // picture: '',
      // pictureUrl: ''
    })
  }
    render() {
        return(
            <div>
                  <Paper style={{backgroundColor: 'darkgrey',height:550,width: 400, marginLeft: 500, marginTop:30, opacity: 0.9, borderWidth: 1, borderColor: 'black', borderStyle: 'solid'}}>
      <CardContent>
        <Typography  color="textSecondary">
          <h2>Register</h2>
        </Typography>
        <Typography variant="headline" component="h2">
          
        </Typography>
        <Typography color="textSecondary">
        
        </Typography>
        <Typography component="p">
       
        <form noValidate autoComplete="off">
        <TextField
          id="name"
          label="Username"
          margin="normal"
          value={this.state.username}
          onChange={this.handleOnChangeUsername}
          style={{width: 300}}
        />
        
        <TextField
          id="name"
          label="Email Address"
          margin="normal"
          style={{width: 300}}
          value={this.state.email}
          onChange={this.handleOnChangeEmail}
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

         <TextField
          id="uncontrolled"
          label="ConfirmPassword"
          margin="normal"
          type="password"
          value={this.state.confirmPassword}
          onChange={this.handleOnChangeConfirmPassword}
          style={{width: 300}}
        /> <br />

         <FormControl style={{width: 300}} >
          <InputLabel htmlFor="age-simple">Usertype</InputLabel>
          <Select onChange={this.handleOnChangeType} value={this.state.type}>
            <MenuItem value="user">User</MenuItem>
          </Select>
        </FormControl><br />

          {/* <TextField
          id="uncontrolled"
          label="picture"
          margin="normal"
          type="file"
          onChange={this.handleOnChangePicture}
          style={{width: 300}}
        /> */}

        {/* <PreviewPicture picture={this.state.picture} pictureUrl={this.state.pictureUrl} /> */}

        </form>
        <p>Already?<Link to='/'> Login</Link></p>
        </Typography>
      </CardContent>
      <CardActions>

      <Button  onClick={this.Register} style={{marginLeft: 140, backgroundColor: 'grey',borderWidth: 1, borderColor: 'black', borderStyle: 'solid'}} variant="contained" color="primary">
      Register
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
    Signup: (obj) => {
      dispatch(Signup(obj))
    }
  })
}

export default connect(mapStateToProp, mapDispatchToProp) (Register)