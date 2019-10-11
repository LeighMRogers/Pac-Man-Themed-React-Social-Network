import React, { Component } from 'react';
import { Button } from 'antd';
import ArticleManager from '../../modules/ArticleManager';
import EditArticleForm from "./EditArticleForm"
class ArticleCard extends Component {
	state = {
		myCard: ""
	}


	handleDelete = id => {
		ArticleManager.delete(id).then(() => {
			this.props.getData();
		});
	};

	// getData = () => {

	// 	ArticleManager.getArticles(this.props.activeUser).then(articles => {
	// 		console.log('articles array', articles);
	// 		this.setState({
	// 			articles: this.props.articles
	// 		});
	// 	});
	// };

	componentDidMount() {

		if (parseInt(sessionStorage.getItem("activeUser")) === this.props.article.userId) {
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
				{this.state.myCard ? (
					<>
						<div className="myCard">

							<h3>
								<span>{this.props.article.title}</span>
							</h3>
							<p>Summary: {this.props.article.summary}</p>
							<p>Url: {this.props.article.url}</p>
							<p>date: {this.props.article.date}</p>
							<div className='cardButtonRow'>
								<EditArticleForm {...this.props.article} getData={this.props.getData} />
								<Button
									className='addItemBtn'
									type='primary'
									shape='round'
									icon='delete'
									size='small'
									onClick={() => this.handleDelete(this.props.article.id)}
								>
									Delete
					    </Button>
							</div>
						</div>
					</>
				) : (

						<div className="friendCard">

							<h3>
								<span>{this.props.article.title}</span>
							</h3>
							<p>{this.props.article.user.name}</p>
							<p>Summary: {this.props.article.summary}</p>
							<p>Url: {this.props.article.url}</p>
							<p>date: {this.props.article.date}</p>
						</div>

					)}
			</>
		);


	}
}

export default ArticleCard;
