import React, { Component } from 'react';
import Nutshell from './Nutshell';

class Auth extends Component {
	state = {
		user: sessionStorage.getItem('activeUser') !== null,
		activeUser: this.getUser()
	};
	// Check if credentials are in session storage
	//returns true/false
	isAuthenticated = () => sessionStorage.getItem('activeUser') !== null;

	setUser = id => {
		sessionStorage.setItem('activeUser', id);
		this.setState({ activeUser: this.getUser(), user: true });
	};

	getUser() {
		if (sessionStorage.getItem('activeUser')) {
			return parseInt(sessionStorage.getItem('activeUser'));
		} else {
			return '';
		}
		// this.setState({activeUser: parseInt(sessionStorage.getItem('activeUser'))})
	}
	//
	clearUser = () => {
		sessionStorage.removeItem('activeUser');
		this.setState({
			user: this.isAuthenticated()
		});
	};
	render() {
		return (
			<>
				{/* <div className='landingLogoPlaceholder'></div> */}
				<Nutshell
					isAuthenticated={this.isAuthenticated}
					clearUser={this.clearUser}
					getUser={this.getUser}
					setUser={this.setUser}
					user={this.state.user}
					{...this.props}
					activeUser={this.state.activeUser}
				/>
			</>
		);
	}
}

export default Auth;
