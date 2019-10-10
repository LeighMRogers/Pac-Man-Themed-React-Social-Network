import React from 'react';
import { Drawer, Button } from 'antd';
import ArticleManager from "../../modules/ArticleManager"

class AddArticleForm extends React.Component {
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


	addNewArticle = () => {
		// evt.preventDefault();
		if (this.state.title === "" || this.state.date === "" || this.state.summary === "" || this.state.url === "") {
			window.alert("Please fill out all the fields");
		} else {
			let userId = parseInt(sessionStorage.getItem("activeUser"))
			const article = {
				date: this.state.date,
				title: this.state.title,
				summary: this.state.summary,
				url: this.state.url,
				userId: userId
			};
			ArticleManager.post(article)
				.then(this.props.getData)


		}
	}
	handleClick = evt => {
		evt.preventDefault();
		this.addNewArticle()
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
					title='Basic Bitch Drawer'
					placement='right'
					closable={false}
					onClose={this.onClose}
					visible={this.state.visible}
				>
					<form>
						<fieldset>
							<div className="formgrid">
								<input type="date" required onChange={this.handleFieldChange} id="date" placeholder="Date" />
								<label htmlFor="date">Date</label>
								<input type="text" required onChange={this.handleFieldChange} id="title" placeholder="Title" />
								<label htmlFor="title">Title</label>
								<input type="text" required onChange={this.handleFieldChange} id="summary" placeholder="Summary" />
								<label htmlFor="title">Summary</label>
								<input type="text" required onChange={this.handleFieldChange} id="url" placeholder="URL" />
								<label htmlFor="title">URL</label>
							</div>
							<div className="alignRight">
								<button type="button" disabled={this.state.loadingStatus} onClick={this.handleClick}>Submit
                            </button>
							</div>
						</fieldset>
					</form>
				</Drawer>
			</div>
		);
	}
}

export default AddArticleForm;
