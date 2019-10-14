import React from 'react';
import { Drawer, Button, Form, Icon, Input, Checkbox } from 'antd';
import TaskManager from '../../modules/TasksManager';

class AddTaskForm extends React.Component {
	state = {
		visible: false,
		userId: '',
		dueDate: '',
		title: '',
		completed: 'no',
		loadingStatus: false
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

	addNewTask = () => {
		if (
			this.state.title === '' ||
			this.state.dueDate === '' ||
			this.state.completed === ''
		) {
			window.alert('Please fill out all the fields');
		} else {
			let userId = parseInt(sessionStorage.getItem('activeUser'));
			const task = {
				dueDate: this.state.dueDate,
				title: this.state.title,
				completed: this.state.completed,
				userId: userId
			};
			TaskManager.post(task).then(this.props.getData);
		}
	};
	handleClick = evt => {
		evt.preventDefault();
		this.addNewTask();
		this.onClose();
		document.querySelector('#title').value = '';
		document.querySelector('#dueDate').value = '';
	};

	render() {
		return (
			<div className='addBtnContainer'>
				<Button
					className='addItemBtn'
					type='primary'
					shape='round'
					icon='plus'
					onClick={this.showDrawer}
				>
					Add New
				</Button>
				<Drawer
					width='350'
					title='Add New Task'
					placement='right'
					closable={false}
					onClose={this.onClose}
					visible={this.state.visible}
				>
					<Form>
						<div className='formField'>
							<Input
								type='date'
								required
								onChange={this.handleFieldChange}
								id='dueDate'
								placeholder='Date'
								prefix={
									<Icon type='calendar' style={{ color: 'rgba(0,0,0,.25)' }} />
								}
							/>
						</div>
						<div className='formField'>
							<Input
								type='text'
								required
								onChange={this.handleFieldChange}
								id='title'
								placeholder='Title'
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
				</Drawer>
			</div>
		);
	}
}

export default AddTaskForm;
