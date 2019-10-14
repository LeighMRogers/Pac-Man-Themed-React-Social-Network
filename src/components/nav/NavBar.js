import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import FriendsList from '../friends/FriendsList';
import { Button } from 'antd';

class NavBar extends Component {
	handleLogout = () => {
		this.props.clearUser();
		this.props.history.push('/');
	};
	render() {
		return (
			<div className='navWrapper'>
				<div className='logoPlaceholder'>Logo Placeholder</div>
				<nav>
					<ul className='nav nav-pills nav-fill'>
						<li className='nav-item'>
							<Link className='nav-link' to='/news'>
								<Button className='navBtn'>News</Button>
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/events'>
								<Button className='navBtn'>Events</Button>
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/messages'>
								<Button className='navBtn'>Messages</Button>
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/tasks'>
								<Button className='navBtn'>Tasks</Button>
							</Link>
						</li>
						<li className='nav-item'>
							<Button size='small' onClick={this.handleLogout}>
								Logout
							</Button>
						</li>
					</ul>
				</nav>
				<FriendsList currentUserId={this.props.activeUser} />
			</div>
		);
	}
}

export default withRouter(NavBar);
