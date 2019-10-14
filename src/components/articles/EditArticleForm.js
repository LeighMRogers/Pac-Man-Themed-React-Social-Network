import React from 'react';
import { Drawer, Button, Form, Icon, Input } from 'antd';
import ArticleManager from '../../modules/ArticleManager';

class EditArticleForm extends React.Component {
	state = {
		visible: false,
		userId: '',
		date: '',
		title: '',
		summary: '',
		url: '',
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
		});
	};

	updateExistingArticle = () => {
		this.setState({ loadingStatus: true });
		const editedArticle = {
			userId: this.state.userId,
			date: this.state.date,
			title: this.state.title,
			summary: this.state.summary,
			url: this.state.url,
			id: this.props.id
		};

		ArticleManager.update(editedArticle).then(this.props.getData);
	};

	componentDidMount() {
		ArticleManager.get(this.props.id).then(article => {
			this.setState({
				userId: article.userId,
				date: article.date,
				title: article.title,
				summary: article.summary,
				url: article.url,
				loadingStatus: false
			});
		});
	}

	handleClick = evt => {
		evt.preventDefault();
		this.updateExistingArticle();
		this.onClose();
		this.setState({ loadingStatus: false });
	};

	render() {
		return (
			<div className='addBtnContainer'>
				<Button
					className='addItemBtn'
					type='primary'
					shape='round'
					icon='edit'
					size='small'
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
					<Form className='login-form'>
						<div className='formField'>
							<Input
								type='date'
								required
								onChange={this.handleFieldChange}
								id='date'
								placeholder='Date'
								value={this.state.date}
								prefix={
									<Icon type='calendar' style={{ color: 'rgba(0,0,0,.25)' }} />
								}
							/>
						</div>
						<div className='formField'>
							<Input
								type='text'
								required
								onChange={this.handleFieldChange}
								id='title'
								placeholder='Title'
								value={this.state.title}
								prefix={
									<Icon type='pic-left' style={{ color: 'rgba(0,0,0,.25)' }} />
								}
							/>
						</div>
						<div className='formField'>
							<Input
								type='text'
								required
								onChange={this.handleFieldChange}
								id='summary'
								placeholder='Summary'
								value={this.state.summary}
								prefix={
									<Icon
										type='align-left'
										style={{ color: 'rgba(0,0,0,.25)' }}
									/>
								}
							/>
						</div>
						<div className='formField'>
							<Input
								type='text'
								required
								onChange={this.handleFieldChange}
								id='url'
								placeholder='URL'
								value={this.state.url}
								prefix={
									<Icon type='chrome' style={{ color: 'rgba(0,0,0,.25)' }} />
								}
							/>
						</div>

						<div className='formField'>
							<Button
								className='login-form-button'
								type='primary'
								disabled={this.state.loadingStatus}
								onClick={this.handleClick}
								icon='edit'
							>
								Edit
							</Button>
						</div>
					</Form>
					<img
						src='/images/chase.gif'
						alt='Smiley face'
						height='auto'
						width='350px'
						z-index='-2'
					/>
				</Drawer>
			</div>
		);
	}
}

export default EditArticleForm;
