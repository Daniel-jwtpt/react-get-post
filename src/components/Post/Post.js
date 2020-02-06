import React from 'react';
import { withRouter } from 'react-router-dom';

import classes from './Post.module.css';

const post = (props) => (
    <article onClick={props.clicked} className={classes.Post}>
        <h1>{props.title}</h1>
        <div className={classes.Info}>
        <div className={classes.Author}>{props.author}</div>
        </div>
    </article>
);

export default withRouter(post);