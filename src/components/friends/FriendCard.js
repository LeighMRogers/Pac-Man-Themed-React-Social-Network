// This file is in charge of displaying one friend that is being pulled from FriendsList. It will also contain a delete/"Ghost" button, a profile image/icon, and their name.

import React, { Component } from 'react';

class FriendCard extends Component {
	render() {
		return (
			<div className='friendCardNav'>
				<h6>{this.props.friend.user.name}</h6>
				<button
					type='button'
					className='btn'
					onClick={() => this.props.deleteFriend(this.props.friend.id)}
				>
					Ghost
				</button>
			</div>
		);
	}
}

export default FriendCard;
