import React, { Component } from 'react';
import TasksManager from '../../modules/TasksManager';
import TaskCard from './TaskCard';
import AddTaskForm from '../tasks/AddTaskForm';

class TaskList extends Component {
	state = {
		tasks: []
	};

	// componentDidMount() {
	// 	TasksManager.getTasks(this.props.activeUser).then(tasks => {
	// 		this.setState({
	// 			tasks: tasks
	// 		});
	// 	});
	// }

	getData = () => {

		TasksManager.getTasks5(this.props.activeUser).then(tasks => {
			this.setState({
				tasks: tasks
			});
		});
	};

	render() {
		return (
			<div className='mainContainer'>
				<h1>TASKS</h1>
				<AddTaskForm getData={this.getData} />
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