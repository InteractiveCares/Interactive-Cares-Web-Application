import React,{Component} from "react";
import loginImg from "../../ict.png";
import fire from '../../configure/Fire';

export class Register extends React.Component{
    constructor() {
        super();
        this.state = {
          name :'',
          number:'',
          email: '',
          password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.signup = this.signup.bind(this);
      }
      handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
     }
     handleSubmit(e) {
        e.preventDefault();
        const usersRef = fire.database().ref('users');
        const user = {
          name: this.state.name,
          number: this.state.number,
          email: this.state.email,
          password: this.state.password
        }
        usersRef.push(user);
        this.setState({
            name :'',
            number:'',
            email: '',
            password: ''
        });
      }
      signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).then((u)=>{console.log(u)})
        .catch((error) => {
            console.log(error);
          })
      }
      

    render(){
        return(
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header"></div>
                <form onSubmit={this.handleSubmit}>
                <div className="content">
                    <div className="image">
                        <img src={loginImg}/>
                    </div>
                    <div className="form" >
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input value={this.state.name} onChange={this.handleChange} type="text" name="name" placeholder="Full Name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="number">Phone Number</label>
                            <input value={this.state.number} onChange={this.handleChange} type="text" name="number" placeholder="Phone Number"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input  value={this.state.email} onChange={this.handleChange} type="email" name="email" placeholder="Email Address"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input  value={this.state.password} onChange={this.handleChange} type="password" name="password" placeholder="Password"/>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button onClick={this.signup} type="button" className="btn">
                        Register
                    </button>
                </div>
                </form>
            </div>
        );

    }
}