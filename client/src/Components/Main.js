import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

export const GET_BOOKS = gql`
  query GetBooks {
    books {
      id
      title
    }
  }
`;

export default () => (
    <Query query={GET_BOOKS}>
      {({ loading, data }) => !loading && (
        <Container>
            {data.books.map(book => (
                <div>
                    <div>{book.id}</div>
                    <div>{book.title}</div>
                </div>
            ))}
        </Container>
      )}
    </Query>
  );
