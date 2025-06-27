server.js
const { ApolloServer, gql } = require('apollo-server');
const express = require('express');
const app = express();

// Define your GraphQL schema
const typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    price: Float!
  }

  type Query {
    products: [Product!]! # Defines a query to fetch all products
  }
`;

// Mock data (replace with actual database interaction)
const products = [
  { id: '1', name: 'Laptop', price: 1200 },
  { id: '2', name: 'Keyboard', price: 75 },
  { id: '3', name: 'Mouse', price: 25 },
];

// Create resolvers for your schema
const resolvers = {
  Query: {
    products: () => products,
  },
};

// Create an Apollo Server instance
const server = new ApolloServer({ typeDefs, resolvers });

// Use process.env.PORT to allow Render to set the port
const PORT = process.env.PORT || 4000;

// Start the Apollo Server
server.listen({ port: PORT }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
