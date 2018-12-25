import React, { Component } from 'react';
import PropTypes, { func } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { AddChat, GetChat, GetUsers, UploadImage } from '../components/store/actions/chat.actions';
import { Signout } from '../components/store/actions/auth.actions';
import swal from 'sweetalert';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      username: '',
      message: [],
      user: [],
    }
    this.handleOnChangeName = this.handleOnChangeName.bind(this)
    this.addmessage = this.addmessage.bind(this)
    this.Logout = this.Logout.bind(this)
    this.props.GetChat();
    this.props.GetUsers();
  }



  Logout = () => {
    this.props.Signout()
   
  }



  handleOnChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }



  addmessage = () => {
    if(this.state.name == "") {
      swal({
        title: 'Dont message type here',
        icon: 'warning',
        buttons: 'Ok!'
      })
    }

    else {
      let obj = {
        name: this.state.name
      }
      this.props.AddChat(obj)
      
      swal({
        title: 'Send Your message here',
        icon: 'success',
        buttons: 'Ok!'
      })
    }

    this.setState({
      name: ''
    })
  }
    render() {
        return(
            <div>
           
                <Card style={{backgroundColor: 'black',width: 1365, borderRadius: 0, height:60, opacity: 0.9}}>
      <CardContent>
        <Typography  color="textSecondary">
        
        <List component="nav">
        {
          this.props.user.map((value, index) => {
            return(
            <ListItem key={index}>
              <ListItem style={{color: 'white', marginTop:-25, fontSize: 20}}>{value.username}</ListItem>
           </ListItem>
            )
          })
        }
         
        </List>
        </Typography>
        <Typography variant="headline" component="h2">
        
        </Typography>
        <Typography  color="textSecondary">
          
        </Typography>
        <Typography component="p">
        
         
        </Typography>
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>

    
    <Card style={{backgroundColor: 'white',width: 300, borderRadius: 0, height:605, opacity: 0.9}}>
      <CardContent>
        <Typography  color="textSecondary">
      
        </Typography>
        <Typography variant="headline" component="h2">
       
        </Typography>
        <Typography  color="textSecondary">
          
        </Typography>
        <Typography component="p">
        
         
        </Typography>
      </CardContent>
      <CardActions>
        
      <Button onClick={this.Logout} style={{backgroundColor: 'grey',borderWidth: 1, borderColor: 'black', borderStyle: 'solid'}} variant="contained" color="primary">
        Logout
      </Button>
      </CardActions>

    </Card>

     <Card style={{overflowY: 'scroll',backgroundColor: 'grey',width: 1065, marginTop: -605, marginLeft: 300 ,borderRadius: 0, height:550, opacity: 0.9}}>
      <CardContent>
        <Typography  color="textSecondary">
        <List component="nav">
        {
          this.props.message.map((value, index) => {
            return(
            <ListItem key={index}>
              <ListItem style={{color: 'white'}}>{value.name}</ListItem>
           </ListItem>
            )
          })
        }
         
        </List>
        </Typography>
        <Typography variant="headline" component="h2">
        
        </Typography>
        <Typography  color="textSecondary">
          
        </Typography>
        <Typography component="p">
        
         
        </Typography>
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
    <form  noValidate autoComplete="off">
        <TextField
          id="name"
          label="Type Your Message"
          margin="normal"
          value={this.state.name}
          onChange={this.handleOnChangeName}
          style={{width: 850, marginLeft:200,marginTop:-0}}
        />
          <Button onClick={this.addmessage} style={{opacity: 0.9,marginTop: -40,marginLeft: 1200,backgroundColor: 'grey',borderWidth: 1, borderColor: 'black', borderStyle: 'solid'}} variant="contained" color="primary">
        Send
      </Button>
        </form>
            </div>
        )
    }
}

const mapStateToProp = (state) => {
  return({
    auth: state.auth,
    chat: state.chat,
    message: state.chat.message,
    user: state.chat.user
  })
}

const mapDispatchToProp = (dispatch) => {
  return({
    AddChat: (obj) => {
      dispatch(AddChat(obj))
    },
    GetChat: () => {
      dispatch(GetChat())
    },
    GetUsers: () => {
      dispatch(GetUsers())
    },
    Signout: () => {
      dispatch(Signout())
    },
  })
}

export default connect(mapStateToProp, mapDispatchToProp) (Dashboard)