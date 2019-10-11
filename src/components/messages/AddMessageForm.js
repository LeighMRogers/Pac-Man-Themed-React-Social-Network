import React from 'react';
import { Button, Form, Icon, Input } from 'antd';
import MessagesManager from "../../modules/MessagesManager"

class AddMessageForm extends React.Component {
	state = {
		visible: false,
		userId: "",
		date: "",
		message: "",
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
		})
	};


	addNewMessage = () => {
		// evt.preventDefault();
		if (this.state.date === "" || this.state.message === "") {
			window.alert("Please fill out all the fields");
		} else {
			let userId = parseInt(sessionStorage.getItem("activeUser"))
			const message = {
				date: this.state.date,
				message: this.state.message,
				userId: userId
			};
			MessagesManager.post(message)
				.then(this.props.getData)


		}
	}
	handleClick = evt => {
		evt.preventDefault();
		this.addNewMessage()
		this.onClose()
		document.querySelector("#date").value = ""
		document.querySelector("#message").value = ""

	}



	render() {
		return (
			<div className='addBtnContainer'>
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
				<Form>
                    <div className="formField">
                        <Input type="date" required onChange={this.handleFieldChange} id="date" placeholder="Date" prefix={
                            <Icon type='calendar' style={{ color: 'rgba(0,0,0,.25)' }} />
                        } />
                    </div>
                    <div className="formField">
                        <Input type="text" required onChange={this.handleFieldChange} id="message" placeholder="Message" prefix={
                            <Icon type='pic-left' style={{ color: 'rgba(0,0,0,.25)' }} />
                        } />
                    </div>

                    <div className="formField">
                        <Button className="login-form-button" type="primary" disabled={this.state.loadingStatus} onClick={this.handleClick} icon="add">Submit
                        </Button>
                    </div>
                </Form>
			</div>
		);
	}
}

export default AddMessageForm;