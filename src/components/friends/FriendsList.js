// FriendsList renders every FriendCard where the user is friends with another user.

// This container lives on the nav bar at the bottom.

// FriendsList includes:
// 1. search input field with search functionality for other users.
// 2. A hidden form component to add friends, either modal or drawer.
// 3. A "+" button at the top of the FriendsList container where modal/drawer pops up to search/add friends.

import React, { Component } from 'react'
//import the components we will need
import FriendCard from './FriendCard'
import FriendsManager from '../../modules/FriendsManager'
class FriendsList extends Component {
    //define what this component needs to render
    state = {
        friends: [],
    }

    deleteFriend = id => {
        FriendsManager.delete(id)
        .then(() => {
          FriendsManager.getFriends()
          .then((newFriends) => {
            this.setState({
                friends: newFriends
            })
          })
        })
    }

    componentDidMount(){
        console.log("Friends LIST: ComponentDidMount");
        //getAll from FriendsManager and hang on to that data; put it in state
        FriendsManager.getFriends()
        .then((friends) => {
            this.setState({
                friends: friends
            })
        })
    }

    render() {
        console.log("Friend Search: Render");
        return(
            <>
            {/* //add this button above your display of friend cards */}
            <div className="container-cards">
                {this.state.friends.map(friend =>
                    <FriendCard key={friend.id}
                                friend={friend}
                                deleteFriend={this.deleteFriend}
                                {...this.props} />)}
            </div>
            </>
        )
    }
}

export default FriendsList