import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Posts from '../Posts/Posts';
import './Blog.css';

class Blog extends Component {
    render () {
        return (
            <div className='Blog'>
                <header >
                    <nav>
                        <ul>
                            <li><a href='/' >Home</a></li>
                            <li><a href='/new-post'>New Post</a></li>
                        </ul>
                    </nav>
                </header>
                {/* <Posts /> */}
                <Route path='/' element={()=>{<h1>Home</h1>}}  />
                
            </div>
        );
    }
}

export default Blog;