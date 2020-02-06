import React, { Component } from 'react';
import { Route, NavLink, Switch, } from 'react-router-dom';

//import Post from '../../components/Post/Post';
//import FullPost from '../../components/FullPost/FullPost';
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
                                <NavLink  activeClassName={classes.active} to="/posts/" exact>Home</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName={classes.active} to="/new-post">New Post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {/*<Route path="/" exact render={() => <h1>Home</h1>} /> */}
                    {this.state.auth ? <Route path="/new-post" exact component={asyncNewPost} /> : null}
                    <Route path="/posts" component={Posts} />
                    {/*<Redirect from="/" to="/posts" />*/}
                    <Route render={()=> <h1>Not Found</h1>} />
                </Switch>
            </div>
        );
    }
}

export default Blog;