import React, { Component } from 'react'

class MessagesList extends Component {
    //define what this component needs to render
    state = {
        messages: [],
    }
    render() {
        console.log("Messages LIST: Render");
        return (
            <p>Hello you are currently viewing the Messages List</p>
        )
    }
}
export default MessagesList