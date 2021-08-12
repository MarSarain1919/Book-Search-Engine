const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    savedBooks: [Book]
  }

  type Book {
    _id: ID!
    title: String!
    authors: [String]
    description: String!
    image: String!
    link: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    getUser: User
  }

  type Mutation {
    
  }
`;

module.exports = typeDefs;
