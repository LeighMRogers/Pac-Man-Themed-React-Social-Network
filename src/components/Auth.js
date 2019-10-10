import React, { Component } from 'react';
import Nutshell from './Nutshell'

class Auth extends Component {
    state = {
        user: sessionStorage.getItem('activeUser') !== null,
        activeUser: ""
    }
    // Check if credentials are in session storage
    //returns true/false
    isAuthenticated = () => sessionStorage.getItem('activeUser') !== null;

    setUser = (id) => {
        sessionStorage.setItem('activeUser', id);
        this.setState({activeUser: this.getUser()})
    };

    getUser = ()=> {
        return parseInt(sessionStorage.getItem('activeUser'))
    }
    //
    clearUser = () => {
        sessionStorage.removeItem('activeUser');
        this.setState({
            user: this.isAuthenticated()
        });
    }
    render() {
        return (

                <Nutshell
                isAuthenticated={this.isAuthenticated}
                clearUser={this.clearUser}
                setUser={this.setUser}
                user={this.state.user}
                {...this.props}
                activeUser={this.state.activeUser}/>

        )
    }
}

export default Auth