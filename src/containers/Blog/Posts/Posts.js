import React from 'react';
import { Link } from "react-router-dom";
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import classes from './Posts.module.css';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Columns, Container } from 'react-bulma-components';

const GET_ARTICLES = gql`
  { 
    allArticles {
      id
      slug
      title
    }
  }
`;

const Articles = () => (
  <Query query={GET_ARTICLES}>
    {({ loading, error, data }) => {
      if(loading) return "";
      if(error) return "Error";
      const { allArticles } = data;
      return (
        <Container>
          <Columns>
          {allArticles.map(article =>(
              <Columns.Column key={article.id} className={classes.ContentTitle} size="half">
                <Link to={`/post/${article.slug}`} className="">
                  <p>{article.title}</p>
                </Link>
              </Columns.Column>
            ))}
          </Columns>
        </Container>
      );
    }}
  </Query>
);

export default Articles;