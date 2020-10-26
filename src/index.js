import dotenv from 'dotenv';
import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

import mongoose from 'mongoose';

import './utils/db';
import schema from './schema';
import resolvers from '../src/resolvers/user';

dotenv.config();

const app = express();

//I don't know how to add new query to schema, the
// typedef and resolvers passed as arguments in ApolloServer constructor didn't work
const typeDefs = gql`
    type Query {
        findByName(name: String!): [User]
    }

     type User {
        _id: ID!
        name: String!
        lastName: String!
        age: Number!
    }
`;

const server = new ApolloServer({
    typeDefs,
    resolvers,
    schema,
    cors: true,
    playground: process.env.NODE_ENV === 'development' ? true : false,
    introspection: true,
    tracing: true,
    path: '/',
});

server.applyMiddleware({
    app,
    path: '/flydevs',
    cors: true,
    onHealthCheck: () =>
        // eslint-disable-next-line no-undef
        new Promise((resolve, reject) => {
            if (mongoose.connection.readyState > 0) {
                resolve();
            } else {
                reject();
            }
        }),
});

app.listen({ port: process.env.PORT }, () => {
    console.log(`🚀 Server listening on port ${process.env.PORT}`);
    console.log(`😷 Health checks available at ${process.env.HEALTH_ENDPOINT}`);
});