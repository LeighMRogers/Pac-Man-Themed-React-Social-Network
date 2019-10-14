// This file is in charge of displaying one friend that is being pulled
//from FriendsSearch. It will also contain an Add button, and their name.
import React, { Component } from 'react';

class FriendSearchCard extends Component {
	render() {
		return (
			<div className='friendSearchRow'>
				<h5>{this.props.friend.userName}</h5>
				<button
					type='button'
					className='btn'
					onClick={() => this.props.addFriend(this.props.friend.id)}
				>
					Haunt
				</button>
			</div>
		);
	}
}

export default FriendSearchCard;
