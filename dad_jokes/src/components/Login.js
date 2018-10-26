import React,{Componenet} from 'react';
import axios from 'axios';

class login extends Component{
  state={
    username:'',
    password:'',
  };

  handleSubmit = event => {
    event.preventDefault();
    const endpoint = 'http://localhost:3300/api/login';
    console.log(this.state);
    axios
    .post(endpoint, this.state)
    .then(res =>{ console.log(res.data)})
    .catch(err=>{
      console.error('Error',err)
    });
  }
  render(){

  }
}
export default Login;
