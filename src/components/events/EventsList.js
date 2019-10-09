import React, { Component } from 'react'

class EventsList extends Component {
    //define what this component needs to render
    state = {
        events: [],
    }
    render() {
        console.log("Events LIST: Render");
        return (
            <p>Hello you are currently viewing the Events List</p>
        )
    }
}
export default EventsList