import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from '../Blog/NewPost/NewPost'
import { NavLink, Route, Switch } from 'react-router-dom';
class Blog extends Component {
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
                            >Home</NavLink></li>
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
                    <Route path='/new-post' component={NewPost} />
                    <Route path='/posts'  component={Posts} />
                    {/* <Route path='/:id' component={FullPost} /> */}

                </Switch>
            </div>
        );
    }
}

export default Blog;
