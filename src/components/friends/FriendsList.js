// FriendsList renders every FriendCard where the user is friends with another user.

// This container lives on the nav bar at the bottom.

// FriendsList includes:
// 1. search input field with search functionality for other users.
// 2. A hidden form component to add friends, either modal or drawer.
// 3. A "+" button at the top of the FriendsList container where modal/drawer pops up to search/add friends.

import React, { Component } from 'react';
//import the components we will need
import FriendCard from './FriendCard';
import FriendsManager from '../../modules/FriendsManager';
import FriendsSearch from './FriendsSearch';
class FriendsList extends Component {
	//define what this component needs to render
	state = {
		friends: []
	};

	deleteFriend = id => {
		FriendsManager.delete(id).then(() => {
			FriendsManager.getFriends(this.props.currentUserId).then(newFriends => {
				this.setState({
					friends: newFriends
				});
			});
		});
	};

	addFriend = id => {
		const newFriend = {
			userId: id,
			friendInitiate: this.props.currentUserId
		};
		FriendsManager.post(newFriend).then(() => {
			FriendsManager.getFriends(this.props.currentUserId).then(newFriends => {
				this.setState({
					friends: newFriends
					//call a set state function for all modules
				});
			});
		});
	};

	componentDidMount() {
		//getAll from FriendsManager and hang on to that data; put it in state
		FriendsManager.getFriends(this.props.currentUserId).then(friends => {
			this.setState({
				friends: friends
			});
		});
	}

	render() {
		return (
			<>
				<FriendsSearch {...this.props} addFriend={this.addFriend} />

				<div className='container-cards'>
					<h4>Your Friends</h4>
					{this.state.friends.map(friend => (
						<FriendCard
							key={friend.id}
							friend={friend}
							deleteFriend={this.deleteFriend}
							{...this.props}
						/>
					))}
				</div>
				<a href='https://pacman-master.com/'>Easter Egg!</a>
			</>
		);
	}
}

export default FriendsList;
