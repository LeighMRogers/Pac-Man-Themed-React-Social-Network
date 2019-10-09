import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import FriendsList from "../friends/FriendsList"


class NavBar extends Component {
    handleLogout = () => {
        console.log("handleLogout is being called" , this.props)
        this.props.clearUser();
        this.props.history.push('/');
      }
    render() {
        return (
            <div  className="navWrapper">
                <div className="logoPlaceholder">Logo Placeholder</div>
            <nav>
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <Link className="nav-link" to="/news">News</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/events">Events</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/messages">Messages</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/tasks">Tasks</Link>
                    </li>
                    <button onClick={this.handleLogout}>Logout</button>
                </ul>
            </nav>
            <FriendsList />
            </div>
        )
    }
}

export default withRouter(NavBar);
