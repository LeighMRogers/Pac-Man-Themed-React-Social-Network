const remoteURL = 'http://localhost:8088';

export default {
	getFriends(currentUserId) {
		return fetch(
			`http://localhost:8088/friends/?friendInitiate=${currentUserId}&_expand=user`
		).then(response => response.json());
	}
};
