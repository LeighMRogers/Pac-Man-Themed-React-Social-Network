// This file is in charge of displaying one friend that is being pulled
//from FriendsSearch. It will also contain an Add button, and their name.
import React, { Component } from 'react';
import { Button } from 'antd';
import { Spring } from 'react-spring/renderprops';

class FriendSearchCard extends Component {
	render() {
		return (
			<Spring
				from={{ opacity: 0 }}
				to={{ opacity: 1 }}
				//config={{ duration: 600, easing: easings.easeCubic }}
			>
				{props => (
					<div className='friendSearchWrapper' style={props}>
						<div className='friendSearchRow'>
							<h5>{this.props.friend.userName}</h5>
							<Button
								size='small'
								type='button'
								className='btn'
								onClick={() => this.props.addFriend(this.props.friend.id)}
							>
								Haunt
							</Button>
						</div>
					</div>
				)}
			</Spring>
		);
	}
}

export default FriendSearchCard;
