// This file is in charge of displaying one friend that is being pulled from FriendsList. It will also contain a delete/"Ghost" button, a profile image/icon, and their name.

import React, { Component } from 'react';
import { Button } from 'antd';

class FriendCard extends Component {
	render() {
		return (
			<div className='friendCardNav'>
				<img
					className='cardFriendImg'
					src={`/images/ghost${this.props.friend.userId}.png`}
					alt='Smiley face'
					height='42'
					width='42'
				/>
				<h6>{this.props.friend.user.name}</h6>
				<Button
					size='small'
					type='button'
					className='btn'
					onClick={() => this.props.deleteFriend(this.props.friend.id)}
				>
					Ghost
				</Button>
			</div>
		);
	}
}

export default FriendCard;
