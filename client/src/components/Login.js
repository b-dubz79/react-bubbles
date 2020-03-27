import React from "react";
import axios from 'axios'

class Login extends React.Component {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  constructor(props){
  super(props);
   this.state = {
       credentials: {
       username: '',
       password: ''
       }
   }
}
 
  login = e => {
    e.preventDefault();
    console.log('!!!!', this.state.credentials)
    console.log(typeof this.state.credentials.password)
    axios
    .post('http://localhost:5000/api/login', this.state.credentials)
    .then(res => {
      console.log(res)
      localStorage.setItem('token', res.data.payload)
      this.props.history.push('/protected')
      
    })
      .catch(err => {console.log(err)})
  }

  handleChange = e => {
    this.setState({
        credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
        }
    })
}

  render(){
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>

      <form onSubmit={this.login}>
        <input
        type='text'
        name='username'
        value={this.state.credentials.username}
        onChange={this.handleChange}
        />
        <input
        type='text'
        name='password'
        value={this.state.credentials.password}
        onChange={this.handleChange}
        />
        <button type='submit'>Login</button>
      </form>
    </>
  );
};
}
export default Login;


 