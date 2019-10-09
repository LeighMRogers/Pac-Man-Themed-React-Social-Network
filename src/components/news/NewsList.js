import React, { Component } from 'react'

class NewsList extends Component {
    //define what this component needs to render
    state = {
        articles: [],
    }
    render() {
        console.log("News LIST: Render");
        return (
            <p>Hello you are currently viewing the News List</p>
        )
    }
}
export default NewsList