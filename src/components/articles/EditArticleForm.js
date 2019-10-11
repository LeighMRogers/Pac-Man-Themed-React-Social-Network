import React from 'react';
import { Drawer, Button } from 'antd';
import ArticleManager from "../../modules/ArticleManager"

class EditArticleForm extends React.Component {
    state = {
        visible: false,
        userId: "",
        date: "",
        title: "",
        summary: "",
        url: "",
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
        })
    };


    updateExistingArticle = evt => {
        //evt.preventDefault()
        this.setState({ loadingStatus: true });
        const editedArticle = {
            userId: this.state.userId,
            date: this.state.date,
            title: this.state.title,
            summary: this.state.summary,
            url: this.state.url,
            id: this.props.id
        };

        ArticleManager.update(editedArticle)
            .then(this.props.getData)
    }

    componentDidMount() {
        ArticleManager.get(this.props.id)
            .then(article => {
                this.setState({
                    userId: article.userId,
                    date: article.date,
                    title: article.title,
                    summary: article.summary,
                    url: article.url,
                    loadingStatus: false,

                })
            })
    }


    handleClick = evt => {
        evt.preventDefault();
        this.updateExistingArticle()
        this.onClose()

    }


    render() {
        return (
            <div className='addBtnContainer'>
                <Button
                    className='addItemBtn'
                    type='primary'
                    shape='round'
                    icon='edit'
                    size='small'
                    // size='large'
                    onClick={this.showDrawer}
                >
                    Edit
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
                                <input type="date" required onChange={this.handleFieldChange} id="date" placeholder="Date" value={this.state.date}/>
                                <label htmlFor="date">Date</label>
                                <input type="text" required onChange={this.handleFieldChange} id="title" placeholder="Title" value={this.state.title} />
                                <label htmlFor="title">Title</label>
                                <input type="text" required onChange={this.handleFieldChange} id="summary" placeholder="Summary" value={this.state.summary}/>
                                <label htmlFor="title">Summary</label>
                                <input type="text" required onChange={this.handleFieldChange} id="url" placeholder="URL" value={this.state.url} />
                                <label htmlFor="title">URL</label>
                            </div>
                            <div className="alignRight">
                                <button type="button" disabled={this.state.loadingStatus} onClick={this.handleClick}>Edit
                            </button>
                            </div>
                        </fieldset>
                    </form>
                </Drawer>
            </div>
        );
    }
}

export default EditArticleForm;
