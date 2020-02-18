import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import clsx from 'clsx';

import { Container } from 'react-bulma-components';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import classes from "./FullPost.module.css";

const articleQuery = gql`
  query singleArticle($slug: String!) {
    article: article(filter: {slug: {eq: $slug}}) {
        id
        title
        slug
        author
        date
        text
      }
    }
    
`;

const Article = props => {
  return (
    <Query query={articleQuery} variables={{ slug: props.match.params.slug }}>
      {({ data, loading, error }) => {
        if (loading) return "Loading...";
        if (error) return "error...";
        const { article } = data;
        return (
        <Container>
          <section>
            {article && (
              <article>
                <h1 className={clsx(classes.ArticleTitle, "title is-2")}>{article.title}</h1>
                <strong>
                  <span className={clsx(classes.ArticleDate, "is-size-7 tag")}>{article.date}</span>
                </strong>
                <p className={clsx(classes.ArticleText, "")}>{article.text}</p>
                <small>{article.author}</small>
              </article>
            )}
          </section>
          </Container>
        );
      }}
    </Query>
  );
};

export default Article;