import React, { Component } from 'react';
import { Button } from 'antd';
import MessagesManager from '../../modules/MessagesManager';
import EditMessageForm from "./EditMessageForm"
class MessageCard extends Component {
	state = {
		myCard: ""
	}


	handleDelete = id => {
		MessagesManager.delete(id).then(() => {
			this.props.getData();
		});
	};



	componentDidMount() {

		if (parseInt(sessionStorage.getItem("activeUser")) === this.props.message.userId) {
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

							<h6>
								<span>{this.props.message.user.userName}</span>
							</h6>
							<p>Date: {this.props.message.date}</p>
                            <p>Message: {this.props.message.message}</p>
							<div className='cardButtonRow'>
								<EditMessageForm {...this.props.message} getData={this.props.getData} />
								<Button
									className='addItemBtn'
									type='primary'
									shape='round'
									icon='delete'
									size='small'
									onClick={() => this.handleDelete(this.props.message.id)}
								>
									Delete
				    </Button>
							</div>
						</div>
					):(

					<div className="friendCard">

                            <h6>
								<span>{this.props.message.user.userName}</span>
							</h6>
							<p>Date: {this.props.message.date}</p>
                            <p>Message: {this.props.message.message}</p>
					</div>

				)}
			</>
		);


	}
}

export default MessageCard;
