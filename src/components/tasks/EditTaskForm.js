import React from 'react';
import { Drawer, Button, Form, Icon, Input, Checkbox } from 'antd';
import TaskManager from "../../modules/TasksManager"

class EditTaskForm extends React.Component {
    state = {
        visible: false,
        userId: "",
        dueDate: "",
        title: "",
        completed: "",
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
        })
    };


    updateExistingTask = () => {
        this.setState({ loadingStatus: true });
        const editTask = {
            userId: this.state.userId,
            dueDate: this.state.dueDate,
            title: this.state.title,
            completed: this.state.completed,
            id: this.props.id
        };

        TaskManager.update(editTask)
            .then(this.props.getData)
    }

    componentDidMount() {
        TaskManager.get(this.props.id)
            .then(task => {
                this.setState({
                    userId: task.userId,
                    dueDate: task.date,
                    title: task.title,
                    completed: task.completed,
                    loadingStatus: false,

                })
            })
    }


    handleClick = evt => {
        evt.preventDefault();
        this.updateExistingTask()
        this.onClose()

    }


    render() {
        return (
            <div className='addBtnContainer'>
                <Button
                    className='addItemBtn'
                    type='primary'
                    shape='round'
                    icon='edit'
                    size='small'
                    // size='large'
                    onClick={this.showDrawer}
                >
                    Edit
				</Button>
                <Drawer
                    width='350'
                    title='Edit Task'
                    placement='right'
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <Form
                    className='login-form'>

                                <div className="formField">
                                <Input type="date"
                                required onChange={this.handleFieldChange}
                                id="dueDate"
                                value={this.state.dueDate}
                                prefix={
									<Icon type='calendar' style={{ color: 'rgba(0,0,0,.25)' }} />
								}/>
                                </div>
                                <div className="formField">
                                <Input type="text" required onChange={this.handleFieldChange} id="title" value={this.state.title} prefix={
									<Icon type='pic-left' style={{ color: 'rgba(0,0,0,.25)' }} />
								} />
                                </div>
                                <div className="formField">
                                <Checkbox  required onChange={this.handleFieldChange} id="completed"  value={this.state.completed} />
                                </div>

                                <div className="formField">
                                <Button className="login-form-button" type="primary" disabled={this.state.loadingStatus} onClick={this.handleClick} icon="edit">Edit
                                </Button>
                                </div>

                    </Form>
                </Drawer>
            </div>
        );
    }
}

export default EditTaskForm;