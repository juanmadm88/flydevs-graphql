import { SchemaComposer } from 'graphql-compose';

import db from '../utils/db'; // eslint-disable-line no-unused-vars

const schemaComposer = new SchemaComposer();

import { UserQuery, UserMutation } from './user';
import { AdminQuery, AdminMutation } from './admin';

schemaComposer.Query.addFields({
    ...UserQuery,
    ...AdminQuery,
});

schemaComposer.Mutation.addFields({
    ...UserMutation,
    ...AdminMutation,
});

export default schemaComposer.buildSchema();