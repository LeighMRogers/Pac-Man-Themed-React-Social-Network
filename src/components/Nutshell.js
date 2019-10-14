import React, { Component } from 'react';
import NavBar from './nav/NavBar';
import ApplicationViews from './ApplicationViews';
import './Nutshell.css';
import Login from './auth/Login';
import { Spring } from 'react-spring/renderprops';
// import Registration from './auth/Registration';

class Nutshell extends Component {
	state = {
		refresh: 1
	};

	RefreshState = () => {
		if (this.state.refresh === 1) {
			this.setState({
				refresh: 2
			});
		} else {
			this.setState({
				refresh: 1
			});
		}
	};

	// componentDidMount() {
	// 	this.RefreshState();
	// 	console.log('nutshell did mount');
	// }

	render() {
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
										refresh={this.RefreshState}
										// user={props.user}
										{...this.props}
									/>
									<ApplicationViews
										key={this.state.refresh}
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
						<div className='loginWrapper'>
							<Login {...this.props} />
						</div>
					</section>
				)}
			</React.Fragment>
		);
	}
}

export default Nutshell;
