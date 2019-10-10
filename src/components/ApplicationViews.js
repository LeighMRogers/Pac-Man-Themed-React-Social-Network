import { Route, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import EventsList from './events/EventsList';
import Login from './auth/Login';
import TasksList from './tasks/TasksList';
import ArticlesList from './articles/ArticlesList';
import MessagesList from './messages/MessagesList';
//this file will handle the application views for out nav bar,
//friends list is absent because it will live on the Nav Bar
export default class ApplicationViews extends Component {

	render() {
		return (
			<React.Fragment>
				{/* <Route
					exact
					path='/'
					render={props => {
						console.log("this is the console log we're looking for", this.props)
						return <Login {...props}
						 {...this.props}/>;
					}}
				/> */}
				{/* begin news */}
				<Route
					exact
					path='/'
					render={props => {

						return <ArticlesList {...props} activeUser={this.props.activeUser} />;
					}}
				/>
				{/* end news */}
				<Route
					exact
					path='/events'
					render={props => {

						return <EventsList {...props} />;
					}}
				/>

				<Route
					exact
					path='/messages'
					render={props => {

						return <MessagesList {...props} />;

					}}
				/>

				<Route
					path='/tasks'
					render={props => {

						return <TasksList {...props} />;
					}}
				/>
			</React.Fragment>
		);
	}
}
