import React, { Component } from 'react';
import axios from '../../../axiosInstance';
import './NewPost.css';
import { Redirect } from 'react-router';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Tushar',
        submitted : false,
        auth : false 
    }

    postDatahandler = () => {
        const data = {
            title: this.state.title,
            content: this.state.content,
            author: this.state.author
        }
        console.log(data);
        axios.post('posts', data).then(response => {
            console.log(response);
            this.props.history.push('/posts')
            // this.setState({submitted : true})
        })
    }

    componentDidMount() {
        // if(!this.state.auth){
        //     this.props.history.replace('/posts');
        // }
    }
    render() {
        let redirect = null
        if(this.state.submitted){
            redirect = <Redirect to='/posts'/>
        }
        return (
            <div className="NewPost">
                {redirect}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({ content: event.target.value })} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({ author: event.target.value })}>
                    <option value="Max">Tushar</option>
                    <option value="Manu">Thunder</option>
                </select>
                <button onClick={this.postDatahandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;