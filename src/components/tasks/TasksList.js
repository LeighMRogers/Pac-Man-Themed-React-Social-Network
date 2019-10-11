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

    showCompletedTask = ()=> {
        TasksManager.getCompletedTasks(this.props.activeUser).then(tasks => {
			this.setState({
				tasks: tasks
			});
		});
    }

    showUncompletedTask = () => {
        this.getData()
    }


	render() {
		return (
			<div className='mainContainer'>
				<h1>TASKS</h1>
				<AddTaskForm getData={this.getData} />
                <Button
					className='addItemBtn'
					type='success'
					shape='round'
					onClick={this.showCompletedTask}
				>
					Show Completed Tasks
				</Button>
                <Button
					className='addItemBtn'
					type='danger'
					shape='round'
					onClick={this.showUncompletedTask}
				>
					Show Uncompleted Tasks
				</Button>
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