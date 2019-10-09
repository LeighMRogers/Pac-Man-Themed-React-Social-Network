import React, { Component } from 'react'

class FriendsSearch extends Component {
    //define what this component needs to render
    state = {
        articles: [],
    }
    render() {
        console.log("Friend Search: Render");
        return (
            <section className="section-content">
                <button type="button"
                    className="btn"
                    // refactor for handleSearch
                    onClick={() => {this.props.history.push("/friends/new")}}>
                    Search for Friends
                </button>
            </section>
        )
    }
}
export default FriendsSearch