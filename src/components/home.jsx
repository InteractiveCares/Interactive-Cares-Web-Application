import fire from '../configure/Fire';
import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }
    logout(){
        fire.auth().signOut();
    }
    render() {
        return (
            <div>
                <h1>Welcome to Interactive Cares</h1>
                <button onClick={this.logout}>Logout</button>
            </div>
        );

    }

}

export default Home;