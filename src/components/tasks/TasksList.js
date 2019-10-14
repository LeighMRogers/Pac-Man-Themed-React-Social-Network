import React, { Component } from 'react';
import TasksManager from '../../modules/TasksManager';
import { Button } from 'antd';
import TaskCard from './TaskCard';
import AddTaskForm from '../tasks/AddTaskForm';

class TaskList extends Component {
	state = {
		tasks: []
	};

	componentDidMount() {
		TasksManager.getTasks(this.props.activeUser).then(tasks => {
			this.setState({
				tasks: tasks
			});
		});
	}

	getData = () => {
		TasksManager.getTasks(this.props.activeUser).then(tasks => {
			this.setState({
				tasks: tasks
			});
		});
	};

	showCompletedTask = () => {
		TasksManager.getCompletedTasks(this.props.activeUser).then(tasks => {
			this.setState({
				tasks: tasks
			});
		});
	};

	showUncompletedTask = () => {
		this.getData();
	};

	render() {
		return (
			<div className='mainContainer'>
				<div className='sectionHeader'>
					<h1>12333TASKS53369</h1>
					<AddTaskForm getData={this.getData} />
				</div>
				<div className='taskRow'>
					<Button
						className='addItemBtn'
						type='primary'
						shape='round'
						onClick={this.showCompletedTask}
					>
						Done
					</Button>
					<Button
						className='addItemBtn'
						type='primary'
						shape='round'
						onClick={this.showUncompletedTask}
					>
						To-Do
					</Button>
				</div>
				{this.state.tasks.map(task => (
					<TaskCard
						key={task.id}
						task={task}
						{...this.props}
						getData={this.getData}
					/>
				))}
			</div>
		);
	}
}

export default TaskList;
