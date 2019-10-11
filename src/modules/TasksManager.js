import FriendsManager from './FriendsManager';
const remoteURL = 'http://localhost:8088';

export default {
	getTasks(currentUserId) {
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
					`${remoteURL}/tasks/?userId=${currentUserId}${searchString}&_expand=user&_sort=date&_order=desc&completed=no`
				).then(response => response.json());
			});
    },
    getCompletedTasks(currentUserId) {
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
					`${remoteURL}/tasks/?userId=${currentUserId}${searchString}&_expand=user&_sort=date&_order=desc&completed=yes`
				).then(response => response.json());
			});
	},
	delete(id) {
		return fetch(`${remoteURL}/tasks/${id}`, {
			method: 'DELETE'
		}).then(result => result.json());
	},
	post(newTask) {
		return fetch(`${remoteURL}/tasks`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newTask)
		}).then(data => data.json());
	},
	update(editTask) {
		return fetch(`${remoteURL}/tasks/${editTask.id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(editTask)
		}).then(data => data.json());
	},
	get(id) {
        return fetch(`${remoteURL}/tasks/${id}`)
            .then(result => result.json())
    },
};