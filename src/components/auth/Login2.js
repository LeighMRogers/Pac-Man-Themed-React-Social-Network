import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

class NormalLoginForm extends React.Component {
	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
	};

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Form onSubmit={this.handleSubmit} className='login-form'>
				<Form.Item>
					<Input
						prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
						placeholder='Username'
					/>
				</Form.Item>
				<Form.Item>
					<Input
						prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
						type='password'
						placeholder='Password'
					/>
				</Form.Item>
				<Form.Item>
					<Checkbox>Remember me</Checkbox>)
					<a className='login-form-forgot' href=''>
						Forgot password
					</a>
					<Button
						type='primary'
						htmlType='submit'
						className='login-form-button'
					>
						Log in
					</Button>
					Or <a href=''>register now!</a>
				</Form.Item>
			</Form>
		);
	}
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(
	NormalLoginForm
);

ReactDOM.render(<WrappedNormalLoginForm />, document.getElementById('root'));

export default WrappedNormalLoginForm;
