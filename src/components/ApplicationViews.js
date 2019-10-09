import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import EventsList from "./events/EventsList"
import Login from "./auth/Login"
import TasksList from "./tasks/TasksList"
import NewsList from "./news/NewsList"
import MessagesList from "./messages/MessagesList"
//this file will handle the application views for out nav bar,
//friends list is absent because it will live on the Nav Bar
export default class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>

        <Route exact path="/" render={props => {
            return <Login {...props} />
          }}
        />
        {/* begin news */}
        <Route exact path="/news" render={props => {
          if (this.props.user) {
            return <NewsList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        {/* end news */}
        <Route exact path="/events" render={props => {
          if (this.props.user) {
            return <EventsList {...props} />
          } else {
            return <Redirect to="/login" />
          }
          }}
        />

        <Route exact path="/messages" render={props => {
          if (this.props.user) {
            return <MessagesList {...props} />
          } else {
            return <Redirect to="/login" />
          }
          }}
        />

        <Route path="/tasks" render={props => {
          if (this.props.user) {
            return <TasksList {...props} />
          } else {
            return <Redirect to="/login" />
          }
          }}
        />
      </React.Fragment>
    );
  }
}
