import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_ARTICLES = gql`
  { 
    allArticles {
      id
      title
    }
  }
`;

const Articles = () => (
  <Query query={GET_ARTICLES}>
    {({ loading, error, data }) => {
      if(loading) return "Loading...";
      if(error) return "Error";
      return (
        <div>
        {data.allArticles.map(article =>(
          <div>{article.title}</div>
        ))}
        </div>
      );
    }}
  </Query>
);

export default Articles;