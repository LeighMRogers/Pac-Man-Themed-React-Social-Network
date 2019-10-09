import React, { Component } from 'react';

import ArticleManager from '../../modules/ArticleManager';

class ArticleCard extends Component {
	handleDelete = id => {
		ArticleManager.delete(id).then(() => {
			this.props.getData();
		});
	};
	render() {
		return (
			<div className='card'>
				<div className='card-content'>
					<h3>
						{' '}
						<span className='card-petname'>{this.props.article.title}</span>
					</h3>
					<p>Summary: {this.props.article.summary}</p>
					<p>Url: {this.props.article.url}</p>
					<p>date: {this.props.article.date}</p>
					{/* <button
						type='button'
						onClick={() => {
							this.props.history.push(
								`/articles/${this.props.article.id}/edit`
							);
						}}
					>
						Edit
					</button> */}
					<button
						type='button'
						onClick={() => this.handleDelete(this.props.article.id)}
					>
						Discharge
					</button>
				</div>
			</div>
		);
	}
}

export default ArticleCard;
