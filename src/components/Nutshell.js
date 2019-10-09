import React, { Component } from 'react';
import NavBar from './nav/NavBar';
import ApplicationViews from './ApplicationViews';
import './Nutshell.css';
import Login from './auth/Login';
import Registration from './auth/Registration';

class Nutshell extends Component {
	state = {
		user: sessionStorage.getItem('activeUser') !== null
	};
	// Check if credentials are in session storage
	//returns true/false
	isAuthenticated = () => sessionStorage.getItem('activeUser') !== null;

	setUser = () => {
		this.setState({
			user: this.isAuthenticated()
		});
	};
	//
	clearUser = () => {
		sessionStorage.removeItem('activeUser');
		this.setState({
			user: this.isAuthenticated()
		});
	};

	render() {
		return (
			<React.Fragment>
				{this.state.user ? (
					<section className="wrapper">
						<NavBar
              className="navBar"
							clearUser={this.clearUser}
							user={this.state.user}
							{...this.props}
						/>
						<ApplicationViews className="mainContainer" user={this.state.user} {...this.props} />
					</section>
				) : (
					<section className="landingPage">
						<Login setUser={this.setUser} user={this.state.user} />
						<Registration setUser={this.setUser} user={this.state.user} />
					</section>
				)}
			</React.Fragment>
		);
	}
}

export default Nutshell;
