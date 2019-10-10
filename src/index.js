import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Auth from './components/Auth'
import './index.css';
import 'antd/dist/antd.css';

ReactDOM.render(
	<Router>
		<Auth />
	</Router>,
	document.getElementById('root')
);
