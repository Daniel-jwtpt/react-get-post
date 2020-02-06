import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../../components/Post/Post';
import classes from './Posts.module.css';
import { Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {

    state = {
        posts: [],
        selectedPostId: null
    }

    componentDidMount () {
        axios.get('/posts/')
            .then(response =>{
                const posts = response.data.slice(0,6);
                const updatedPosts = posts.map(post => {
                    return{
                        ...post,
                        author: 'Wunderman Thompson'
                    }
                })
                this.setState({posts: updatedPosts});
            });   
    }

    postSelectedHandler = (id) => {
        this.props.history.push({pathname: '/posts/' + id});
    }

    render (){
        let posts = this.state.posts.map(post => {
            return (
            //<Link to={'/posts' + post.id}  key={post.id}>
                <Post
                    key={post.id}
                    title={post.title} 
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)} 
                />
            //</Link>
            )
        });
        return(
            <div>
                <section className={classes.Posts}>
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
            </div>
           
        )
    }
}

export default Posts