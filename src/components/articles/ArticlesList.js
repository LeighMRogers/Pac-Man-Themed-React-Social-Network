import React, { Component } from 'react';
import ArticleManager from '../../modules/ArticleManager';
import ArticleCard from './ArticleCard';
import AddArticleForm from '../articles/AddArticleForm';
import { Spring } from 'react-spring/renderprops';

class ArticleList extends Component {
	//define what this component needs to render
	state = {
		articles: []
	};

	componentDidMount() {
		console.log('inside componentDidMount', this.props.activeUser);
		// getAll from AnimalManager and hang on to that data; put it in state
		// ArticleManager.getArticles(this.props.activeUser).then(articles => {
		// 	console.log('articles array', articles);
		// 	this.setState({
		// 		articles: articles
		this.getData();
		// this.props.getUser();
		// this.ifThisEmpty();
		// 	});
		// });
	}
	// ifThisEmpty = () => {
	// 	if (this.state.articles.length < 1 || this.state.articles === undefined) {
	// 		this.getData()
	// 	}
	// }
	getData = () => {
		ArticleManager.getArticles(this.props.activeUser).then(articles => {
			console.log('articles array from getData', articles);
			this.setState({
				articles: articles
			});
		});
	};

	render() {
		console.log(
			'THESE ARE YOUR RENDERED ART TICKLES from Article List Render',
			this.state.articles
		);
		return (
			<div className='mainContainer'>
				<h1>NEWS</h1>
				<AddArticleForm getData={this.getData} />
				{this.state.articles.map(article => (
					<ArticleCard
						key={article.id}
						article={article}
						{...this.props}
						getData={this.getData}
					/>
				))}
			</div>
		);
	}
}

export default ArticleList;
