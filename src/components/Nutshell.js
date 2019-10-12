import React, { Component } from 'react';
import NavBar from './nav/NavBar';
import ApplicationViews from './ApplicationViews';
import './Nutshell.css';
import Login from './auth/Login';
import { Spring } from 'react-spring/renderprops';
// import Registration from './auth/Registration';

class Nutshell extends Component {
	// state = {
	// 	activeUser: ""
	// }
	// componentDidMount() {
	// 	this.setUserState()
	// }
	// setUserState = () => {
	// 	this.setState({ activeUser: sessionStorage.getItem('activeUser') })
	// }
	render() {
		console.log('nutshell props:', this.props);
		return (
			<React.Fragment>
				{this.props.user ? (
					<Spring
						from={{ opacity: 0 }}
						to={{ opacity: 1 }}
						//config={{ duration: 500 }}
					>
						{props => (
							<div style={props}>
								<section className='wrapper'>
									<NavBar
										className='navBar'
										currentUserId={this.props.activeUser}
										// clearUser={props.clearUser}
										// user={props.user}
										{...this.props}
									/>
									<ApplicationViews
										currentUserId={this.props.activeUser}
										className='mainContainer'
										// user={props.user}
										// getUser={this.props.getUser}
										{...this.props}
									/>
								</section>
							</div>
						)}
					</Spring>
				) : (
					<section className='landingPage'>
						<Login
							// setUser={this.props.setUser} user={props.user}
							{...this.props}
						/>
						{/* <Registration setUser={this.setUser} user={this.state.user} /> */}
					</section>
				)}
			</React.Fragment>
		);
	}
}

export default Nutshell;
