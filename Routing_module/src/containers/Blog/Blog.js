import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from '../Blog/NewPost/NewPost'
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
class Blog extends Component {
    state ={
        auth : true
    }
    render() {
        return (
            <div className='Blog'>
                <header >
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/posts"
                                exact
                                activeClassName='my-class'
                                activeStyle={{
                                    color: 'red',
                                    textDecoration: 'underline'
                                }}
                            >Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path='/' exact render={()=><h1>Home1</h1>}/>
                <Route path='/' render={()=><h1>Home2</h1>}/> */}
                
                <Switch >
                    {this.state.auth ? <Route path='/new-post' component={NewPost} /> : null } 
                    <Route path='/posts'  component={Posts} />
                    <Route render={()=><h1>404 Not Found</h1>} />
                    {/* <Redirect from='/' to='/posts' /> */}
                    {/* <Route path='/:id' component={FullPost} /> */}

                </Switch>
            </div>
        );
    }
}

export default Blog;
