import FriendsManager from './FriendsManager';
const remoteURL = 'http://localhost:8088';

export default {
	getArticles(currentUserId) {
		// let currentUserId = parseInt(sessionStorage.getItem('activeUser'));
		let currentUserFriends = [];
		return FriendsManager.getFriends(currentUserId)
			.then(data => {
				data.forEach(obj => {
					currentUserFriends.push(obj.userId);
				});
			})
			.then(() => {
				console.log(currentUserFriends);
				let searchString = '';
				currentUserFriends.forEach(id => {
					searchString += `&userId=${id}`;
				});

				return fetch(
					`http://localhost:8088/articles/?userId=${currentUserId}${searchString}&_sort=date&_order=desc`
				).then(response => response.json());
			});
	},
	delete(id) {
		return fetch(`${remoteURL}/articles/${id}`, {
			method: 'DELETE'
		}).then(result => result.json());
	},
	post(newArticle) {
		return fetch(`${remoteURL}/articles`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newArticle)
		}).then(data => data.json());
	},
	update(editedArticle) {
		return fetch(`${remoteURL}/articles/${editedArticle.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(editedArticle)
		}).then(data => data.json());
	},
	get(id) {
        return fetch(`${remoteURL}/articles/${id}`)
            .then(result => result.json())
    },
};
