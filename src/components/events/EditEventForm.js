import React from 'react';
import { Drawer, Button, Form, Icon, Input,  } from 'antd';
import EventsManager from "../../modules/EventsManager"

class EditEventForm extends React.Component {
    state = {
        visible: false,
        userId: "",
        date: "",
        title: "",
        location: "",
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


    updateExistingEvent = evt => {
        //evt.preventDefault()
        this.setState({ loadingStatus: true });
        const editedEvent = {
            userId: this.state.userId,
            date: this.state.date,
            title: this.state.title,
            location: this.state.location,
            id: this.props.id
        };

        EventsManager.update(editedEvent)
            .then(this.props.getData)
    }

    componentDidMount() {
        EventsManager.get(this.props.id)
            .then(event => {
                this.setState({
                    userId: event.userId,
                    date: event.date,
                    title: event.title,
                    location: event.location,
                    loadingStatus: false,

                })
            })
    }


    handleClick = evt => {
        evt.preventDefault();
        this.updateExistingEvent()
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
                    title='Edit News'
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
                                id="date" placeholder="Date"
                                value={this.state.date}
                                prefix={
									<Icon type='calendar' style={{ color: 'rgba(0,0,0,.25)' }} />
								}/>
                                </div>
                                <div className="formField">
                                <Input type="text" required onChange={this.handleFieldChange} id="title" placeholder="Title" value={this.state.title} prefix={
									<Icon type='pic-left' style={{ color: 'rgba(0,0,0,.25)' }} />
								} />
                                </div>
                                <div className="formField">
                                <Input type="text" required onChange={this.handleFieldChange} id="location" placeholder="Location" value={this.state.location} prefix={
									<Icon type='align-left' style={{ color: 'rgba(0,0,0,.25)' }} />
								}/>
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

export default EditEventForm;
