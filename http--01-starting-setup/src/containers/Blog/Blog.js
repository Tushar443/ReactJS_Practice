import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
// import axios from 'axios';
import axios from '../axiosInstance'

class Blog extends Component {

    state = {
        posts:[],
        selectedPost : null 
    }

    componentDidMount(){
        axios.get('/posts')
             .then(response  =>{
                const posts = response.data.slice(0,5);
                const updatedPosts = posts.map(post=>{
                    return { 
                        ...post,
                        author : 'Tushar'
                    }
                })
                this.setState({
                    posts : updatedPosts
                })

            // console.log("@",this.state);
        })
    }

    fullPostClickHandler = (id)=>{
        // console.log(id);
        this.setState({
            selectedPost : id
        })
        // console.log(this.state);
    }


    render () {
        const posts = this.state.posts.map(post=>{
            return <Post key={post.id} title = {post.title} author ={post.author} clicked= {()=>this.fullPostClickHandler(post.id)}/>
        })
     
        return (
            <div>
                <section className="Posts">
                   {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPost} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;

//@@@@@@@@@@@@ Create new Axios file and add this code 


/*

import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';
// instance.defaults.baseURL
// instance.intercepters.request
// instance.intercepters.response

export default instance;
*/