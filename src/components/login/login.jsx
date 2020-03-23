import React from "react";
import loginImg from "../../icnt.jpg";
import "./loginRegister";
import fire from '../../configure/Fire';

export class Login extends React.Component{
    constructor(props) {
        super(props);
        //this.state={
        //isLogginActive: true,
        //}
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        //this.signup = this.signup.bind(this);
        this.state = {
          email: '',
          password: ''
        };
      }
    
      handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
    
      login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).catch((error) => {
            console.log(error);
          });
      }

    render(){
        return(
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header"></div>
                <div className="content">
                    <div className="image">
                        <img src={loginImg}/>
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input value={this.state.email} onChange={this.handleChange}  type="email" name="email" placeholder="Email Address"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input value={this.state.password} onChange={this.handleChange}  type="password" name="password" placeholder="Password"/>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button onClick={this.login} type="button" className="btn">
                        Login
                    </button>
                </div>
            </div>
        );

    }
}