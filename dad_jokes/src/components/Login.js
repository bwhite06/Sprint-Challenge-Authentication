import React,{Component} from 'react';
import axios from 'axios';

class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      username:'',
      password:'',
    };
  }

  componentDidMount(){

  }

  handleSubmit = event => {
    event.preventDefault();
    const endpoint = 'http://localhost:3300/api/login';
    console.log(this.state);
    axios
    .post(endpoint, this.state)
    .then(res =>{

      console.log(res.data)})
    .catch(err=>{
      console.error('Error',err)
    });
  }

  render(){
return(
  <div>
    <form>
      <label>Enter DAD JOkes Username</label>
      <input placeholder='username' value= {this.state.username}/>
      <input placeholder='password' value= {this.state.password}/>
      <button onClick ={this.handleSubmit}></button>
    </form>
  </div>
)
  }
}
export default Login;
