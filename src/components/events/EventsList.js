import React, { Component } from 'react';
import EventsManager from '../../modules/EventsManager';
import EventCard from './EventCard';
import AddEventForm from '../events/AddEventForm';

class EventsList extends Component {
	//define what this component needs to render
	state = {
		events: []
	};

	componentDidMount() {
		//getAll from AnimalManager and hang on to that data; put it in state
		EventsManager.getEvents(this.props.activeUser).then(events => {
			this.setState({
				events: events
			});
		});
	}

	getData = () => {
		EventsManager.getEvents(this.props.activeUser).then(events => {
			this.setState({
				events: events
			});
		});
	};

	render() {
		return (
			<div className='mainContainer'>
				<div className='sectionHeader'>
					<h1>EVENTS</h1>
					<AddEventForm getData={this.getData} />
				</div>
				{this.state.events.map(event => (
					<EventCard
						key={event.id}
						event={event}
						{...this.props}
						getData={this.getData}
					/>
				))}
			</div>
		);
	}
}

export default EventsList;
