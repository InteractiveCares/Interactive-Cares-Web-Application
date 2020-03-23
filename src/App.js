import React , {Component} from 'react';
import './App.scss';
import fire from './configure/Fire';
import { Login , Register, LoginRegister} from "./components/login/index";
import Home from "./components/home";

class App extends React.Component{
  
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }
  
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      //console.log(user);
      if (user) {
        this.setState({ user });
        //localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        //localStorage.removeItem('user');
      }
    });
  }
  
  render(){
    return(
    <div className="App">
      {this.state.user ? (<Home/>) : (<LoginRegister/>)}</div>
    );
  }
}

export default App;
