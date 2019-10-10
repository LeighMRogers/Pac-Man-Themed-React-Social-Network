import React from 'react';
import { Drawer, Button } from 'antd';

class AddArticleForm extends React.Component {
	state = { visible: false };

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
					<h1>BOOO!</h1>
					<p> Lets fill this baby up.</p>
					<p>With forms.</p>
				</Drawer>
			</div>
		);
	}
}

export default AddArticleForm;
