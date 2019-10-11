import React, { Component } from 'react';
import { Button } from 'antd';
import EventsManager from '../../modules/EventsManager';
import EditEventForm from "./EditEventForm"
class EventCard extends Component {
	state = {
		myCard: ""
	}


	handleDelete = id => {
		EventsManager.delete(id).then(() => {
			this.props.getData();
		});
	};



	componentDidMount() {

		if (parseInt(sessionStorage.getItem("activeUser")) === this.props.event.userId) {
			this.setState({
				myCard: true
			})

		} else {
			this.setState({
				myCard: false
			}, () => console.log("my card state", this.state))
		}
	}


	render() {


		return (

			<>
				{ this.state.myCard ? (
						<div className="myCard">

							<h3>
								<span>{this.props.event.title}</span>
							</h3>
							<p>Date: {this.props.event.date}</p>
                            <p>Location: {this.props.event.location}</p>
							<div className='cardButtonRow'>
								<EditEventForm {...this.props.event} getData={this.props.getData} />
								<Button
									className='addItemBtn'
									type='primary'
									shape='round'
									icon='delete'
									size='small'
									onClick={() => this.handleDelete(this.props.event.id)}
								>
									Delete
				    </Button>
							</div>
						</div>
					):(

					<div className="friendCard">

						<h3><span>{this.props.event.title}</span></h3>
						<p>{this.props.event.user.name}</p>
						<p>Date: {this.props.event.date}</p>
                        <p>Location: {this.props.event.location}</p>
					</div>

				)}
			</>
		);


	}
}

export default EventCard;
