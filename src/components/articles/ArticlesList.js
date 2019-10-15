import React, { Component } from 'react';
import ArticleManager from '../../modules/ArticleManager';
import ArticleCard from './ArticleCard';
import AddArticleForm from '../articles/AddArticleForm';

class ArticleList extends Component {
	//define what this component needs to render
	state = {
		articles: []
	};

	componentDidMount() {
		this.getData();
	}

	getData = () => {
		ArticleManager.getArticles(this.props.activeUser).then(articles => {
			this.setState({
				articles: articles
			});
		});
	};

	render() {
		return (
			<div className='mainContainer'>
				<div className='sectionHeader'>
					<h1>NEWS</h1>

					<AddArticleForm getData={this.getData} />
				</div>
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
