import React from 'react';
import { Drawer, Button, Form, Icon, Input } from 'antd';
import TaskManager from '../../modules/TasksManager';

class EditTaskForm extends React.Component {
	state = {
		visible: false,
		dueDate: '',
		title: '',
		loadingStatus: true
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

	updateExistingTask = () => {
		this.setState({ loadingStatus: true });
		const editTask = {
			dueDate: this.state.dueDate,
			title: this.state.title,
			id: this.props.id
		};

		TaskManager.update(editTask).then(this.props.getData);
	};

	componentDidMount() {
		TaskManager.get(this.props.id).then(task => {
			this.setState({
				userId: task.userId,
				dueDate: task.dueDate,
				title: task.title,
				completed: task.completed,
				loadingStatus: false
			});
		});
	}

	handleClick = evt => {
		evt.preventDefault();
		this.updateExistingTask();
		this.onClose();
		this.setState({ loadingStatus: false });
	};

	render() {
		return (
			<div className='addBtnContainer'>
				<Button
					className='addItemBtn'
					type='primary'
					shape='round'
					icon='edit'
					size='small'
					onClick={this.showDrawer}
				>
					Edit
				</Button>
				<Drawer
					className='drawerScroll'
					width='350'
					title='Edit Task'
					placement='right'
					closable={false}
					onClose={this.onClose}
					visible={this.state.visible}
				>
					<Form className='login-form'>
						<div className='formField'>
							<Input
								type='date'
								required
								onChange={this.handleFieldChange}
								id='dueDate'
								value={this.state.dueDate}
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
								value={this.state.title}
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
								icon='edit'
							>
								Edit
							</Button>
						</div>
					</Form>
					<img
						src='/images/chase.gif'
						alt='Smiley face'
						height='auto'
						width='350px'
						z-index='-2'
					/>
				</Drawer>
			</div>
		);
	}
}

export default EditTaskForm;
