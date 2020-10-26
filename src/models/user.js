import mongoose, { Schema } from 'mongoose';
import { composeWithMongoose } from 'graphql-compose-mongoose';

export const UserSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true
        },
        lastName: {
            type: String,
            lowercase: true,
            trim: true,
            unique: true,
            required: true
        },
        age: {
            type: Number,
            unique: true,
            required: false
        }
    },
    {
        collection: 'users',
    }
);

export const User = mongoose.model('User', UserSchema);
export const UserTC = composeWithMongoose(User);