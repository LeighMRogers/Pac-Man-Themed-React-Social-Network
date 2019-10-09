import React, { Component } from 'react';
import FriendsManager from '../../modules/FriendsManager';

class NewsList extends Component {
	//define what this component needs to render
	state = {
		news: []
	};

	getArticles = () => {
		let currentUserId = parseInt(sessionStorage.getItem('activeUser'));
		let currentUserFriends = [];
		return FriendsManager.getFriends(currentUserId)
			.then(data => {
				data.forEach(obj => {
					currentUserFriends.push(obj.userId);
				});
			})
			.then(() => {
				let searchString = '';
				currentUserFriends.forEach(id => {
					searchString += `&userId=${id}`;
				});
				return fetch(
					`http://localhost:8088/articles/?userId=${currentUserId}${searchString}&_sort=date&_order=asc`
				).then(response => response.json());
			});
	};

	componentDidMount() {
		//getAll from AnimalManager and hang on to that data; put it in state
		this.getArticles().then(news => {
			this.setState({
				news: news
			});
		});
	}

	render() {
		console.log(this.state.news);
		return <p>yes</p>;
	}
}

export default NewsList;
