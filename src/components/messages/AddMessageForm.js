import React from 'react';
import { Button, Form, Icon, Input } from 'antd';
import MessagesManager from '../../modules/MessagesManager';

import moment from 'moment';

class AddMessageForm extends React.Component {
	state = {
		visible: false,
		userId: '',
		date: '',
		message: '',
		loadingStatus: false,
		editTimeStamp: ''
	};

	handleFieldChange = evt => {
		const stateToChange = {};
		stateToChange[evt.target.id] = evt.target.value;
		this.setState(stateToChange);
	};

	showDrawer = () => {
		this.setState({
			visible: true
		});
	};
	onClose = () => {
		this.setState({
			visible: false
		});
	};

	addNewMessage = () => {
		// evt.preventDefault();
		if (this.state.message === '') {
			window.alert('Please fill out all the fields');
		} else {
			let userId = parseInt(sessionStorage.getItem('activeUser'));
			const message = {
				date: moment(new Date()),
				message: this.state.message,
				userId: userId,
				editTimeStamp: ''
			};
			MessagesManager.post(message).then(this.props.getData);
		}
	};
	handleClick = evt => {
		evt.preventDefault();
		this.addNewMessage();
		this.onClose();
		document.querySelector('#message').value = '';
	};

	render() {
		return (
			<div className='addBtnContainer'>
				<Form>
					<div className='formField'>
						{/* <Input type="date" required onChange={this.handleFieldChange} id="date" placeholder="Date" prefix={
                            <Icon type='calendar' style={{ color: 'rgba(0,0,0,.25)' }} />
                        } /> */}
					</div>
					<div className='formField'>
						<Input
							type='text'
							required
							onChange={this.handleFieldChange}
							id='message'
							placeholder='Message'
							prefix={
								<Icon type='pic-left' style={{ color: 'rgba(0,0,0,.25)' }} />
							}
						/>
					</div>

					<div className='formField'>
						<Button
							className='login-form-button'
							type='primary'
							disabled={this.state.loadingStatus}
							onClick={this.handleClick}
							icon='add'
						>
							Submit
						</Button>
					</div>
				</Form>
				<Button
					className='addItemBtn'
					type='primary'
					shape='round'
					icon='plus'
					// size='large'
					onClick={this.showDrawer}
				>
					Add New
				</Button>
			</div>
		);
	}
}

export default AddMessageForm;
