import FriendsManager from './FriendsManager';
const remoteURL = 'http://localhost:8088';

export default {
	getEvents(currentUserId) {
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
					`http://localhost:8088/events/?userId=${currentUserId}${searchString}&_sort=date&_order=desc`
				).then(response => response.json());
			});
	},
	delete(id) {
		return fetch(`${remoteURL}/events/${id}`, {
			method: 'DELETE'
		}).then(result => result.json());
	},
	post(newEvent) {
		return fetch(`${remoteURL}/events`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newEvent)
		}).then(data => data.json());
	},
	update(editedEvent) {
		return fetch(`${remoteURL}/events/${editedEvent.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(editedEvent)
		}).then(data => data.json());
	},
	get(id) {
        return fetch(`${remoteURL}/events/${id}`)
            .then(result => result.json())
    },
};
