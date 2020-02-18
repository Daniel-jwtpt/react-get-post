import React, { Component } from 'react';
import { Route, NavLink, Switch, } from 'react-router-dom';

//import Post from '../../components/Post/Post';
import Article from '../../containers/Blog/FullPost/FullPost';
//import NewPost from '../../components/NewPost/NewPost';
import classes from './Blog.module.css';
import Posts from './Posts/Posts';
//import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';

const asyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
})

class Blog extends Component {

    state= {
        auth: true
    }

    render () {
  
        return (
            <div className={classes.Blog}>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink  activeClassName={classes.active} to="/" exact>Home</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName={classes.active} to="/new-post">New Post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {this.state.auth ? <Route path="/new-post" exact component={asyncNewPost} /> : null}
                    <Route exact path="/" component={Posts} />
                    <Route path="/post/:slug" component={Article} />
                </Switch>
            </div>
        );
    }
}

export default Blog;