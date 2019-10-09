import React, { Component } from 'react'

class TasksList extends Component {
    //define what this component needs to render
    state = {
        tasks: [],
    }
    render() {
        console.log("TASKS LIST: Render");
        return (
            <p>Hello you are currently viewing the Tasks List</p>
        )
    }
}
export default TasksList