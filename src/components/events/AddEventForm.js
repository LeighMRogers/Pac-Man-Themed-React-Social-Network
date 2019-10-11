import React from 'react';
import { Drawer, Button, Form, Icon, Input, } from 'antd';
import EventsManager from "../../modules/EventsManager"

class AddEventForm extends React.Component {
	state = {
		visible: false,
		userId: "",
		date: "",
		title: "",
		summary: "",
		url: "",
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


	addNewEvent = () => {
		// evt.preventDefault();
		if (this.state.title === "" || this.state.date === "" || this.state.summary === "" || this.state.url === "") {
			window.alert("Please fill out all the fields");
		} else {
			let userId = parseInt(sessionStorage.getItem("activeUser"))
			const event = {
				date: this.state.date,
				title: this.state.title,
				summary: this.state.summary,
				url: this.state.url,
				userId: userId
			};
			EventsManager.post(event)
				.then(this.props.getData)


		}
	}
	handleClick = evt => {
		evt.preventDefault();
		this.addNewEvent()
		this.onClose()
		document.querySelector("#title").value = ""
		document.querySelector("#date").value = ""
		document.querySelector("#summary").value = ""
		document.querySelector("#url").value = ""

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
				<Drawer
					width='350'
					title='Add an Event'
					placement='right'
					closable={false}
					onClose={this.onClose}
					visible={this.state.visible}
				>
					<Form>

						<div className="formField">
							<Input type="date" required onChange={this.handleFieldChange} id="date" placeholder="Date" prefix={
								<Icon type='calendar' style={{ color: 'rgba(0,0,0,.25)' }} />
							} />
						</div>
						<div className="formField">
							<Input type="text" required onChange={this.handleFieldChange} id="title" placeholder="Title" prefix={
								<Icon type='pic-left' style={{ color: 'rgba(0,0,0,.25)' }} />
							} />
						</div>
						<div className="formField">
							<Input type="text" required onChange={this.handleFieldChange} id="summary" placeholder="Summary" prefix={
								<Icon type='align-left' style={{ color: 'rgba(0,0,0,.25)' }} />
							} />
						</div>
						<div className="formField">
							<Input type="text" required onChange={this.handleFieldChange} id="url" placeholder="URL" prefix={
								<Icon type='chrome' style={{ color: 'rgba(0,0,0,.25)' }} />
							} />

						</div>
						<div className="formField">
							<Button className="login-form-button" type="primary" disabled={this.state.loadingStatus} onClick={this.handleClick} icon="add">Submit
								</Button>
						</div>

					</Form>
				</Drawer>
			</div>
		);
	}
}

export default AddEventForm;