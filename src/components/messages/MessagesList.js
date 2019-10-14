import React, { Component } from 'react';
import MessagesManager from '../../modules/MessagesManager';
import MessageCard from './MessageCard';
import AddMessageForm from '../messages/AddMessageForm';

class MessagesList extends Component {
	//define what this component needs to render
	state = {
		messages: []
	};

	componentDidMount() {
		//getAll from AnimalManager and hang on to that data; put it in state
		MessagesManager.getMessages(this.props.activeUser).then(messages => {
			this.setState({
				messages: messages
			});
		});
	}

	getData = () => {
		MessagesManager.getMessages(this.props.activeUser).then(messages => {
			this.setState({
				messages: messages
			});
		});
	};

	render() {
		return (
			<div className='mainContainer'>
				<h1>MESSAGES</h1>
				{this.state.messages.map(message => (
					<MessageCard
						key={message.id}
						message={message}
						{...this.props}
						getData={this.getData}
					/>
				))}
				<AddMessageForm getData={this.getData} />
			</div>
		);
	}
}

export default MessagesList;
