import React, { Component } from 'react';
import ArticleManager from '../../modules/ArticleManager';
import ArticleCard from './ArticleCard';

class ArticleList extends Component {
	//define what this component needs to render
	state = {
		articles: []
	};

	componentDidMount() {
		//getAll from AnimalManager and hang on to that data; put it in state
		ArticleManager.getArticles().then(articles => {
			console.log('articles array', articles);
			this.setState({
				articles: articles
			});
		});
	}

	getData = () => {
		ArticleManager.getArticles().then(articles => {
			console.log('articles array', articles);
			this.setState({
				articles: articles
			});
		});
	};

	render() {
		return (
			<div>
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
