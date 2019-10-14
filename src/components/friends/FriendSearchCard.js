// This file is in charge of displaying one friend that is being pulled
//from FriendsSearch. It will also contain an Add button, and their name.
import React, { Component } from 'react';

class FriendSearchCard extends Component {
	render() {
		return (
			<div>
				<div>
					<h6>Name: {this.props.friend.userName}</h6>
					<button
						type='button'
						onClick={() => this.props.addFriend(this.props.friend.id)}
					>
						Haunt
					</button>
				</div>
			</div>
		);
	}
}

export default FriendSearchCard;
