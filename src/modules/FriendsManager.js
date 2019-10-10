const remoteURL = 'http://localhost:8088';

export default {
    getFriends(currentUserId) {
		return fetch(
			`http://localhost:8088/friends/?friendInitiate=${currentUserId}&_expand=user`
		).then(response => response.json());
	},
    delete(id) {
        return fetch(`http://localhost:8088/friends/${id}`, {
            method: "DELETE"
        })
        .then(result => result.json())
      },
      post(newFriend) {
        return fetch(`${remoteURL}/friends`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newFriend)
        }).then(data => data.json())
      }
};
