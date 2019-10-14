import React, { Component } from 'react';
import FriendsManager from '../../modules/FriendsManager';
import FriendSearchCard from './FriendSearchCard';

class FriendsSearch extends Component {
	//define what this component needs to render
	state = {
		searchQuery: '',
		searchResults: []
	};

	handleSearch(searchString) {
		if (searchString.length > 2) {
			FriendsManager.findFriend(searchString).then(response => {
				this.setState({ searchResults: response });
			});
		} else {
			this.setState({ searchResults: [] });
		}
	}
	handleFieldChange = evt => {
		const stateToChange = {};
		stateToChange[evt.target.id] = evt.target.value;
		this.setState(stateToChange, () =>
			this.handleSearch(this.state.searchQuery)
		);
	};

	render() {
		return (
			<section className='friendSearch'>
				<h5>Find a Friend:</h5>
				<button
					type='button'
					className='btn'
					onChange={() => {
						this.handleSearch();
					}}
				>
					Search
				</button>
				{/* this is the input field */}
				<input
					id='searchQuery'
					onChange={this.handleFieldChange}
					placeholder='Search by User Name'
				></input>
				{this.state.searchResults.map(friend => (
					<FriendSearchCard
						addFriend={this.props.addFriend}
						key={friend.id}
						friend={friend}
					/>
				))}
			</section>
		);
	}
}
export default FriendsSearch;
