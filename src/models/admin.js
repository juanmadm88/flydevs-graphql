import mongoose, { Schema } from 'mongoose';
import { composeWithMongoose } from 'graphql-compose-mongoose';

export const AdminSchema = new Schema(
    {
        name: {
            type: String,
            unique: false,
            required: true
        },
        lastName: {
            type: String,
            unique: false,
            required: true
        },
        email: {
            type: String,
            unique: false,
            required: true
        },
        password: {
            type: String,
            unique: false,
            required: true
        }
    },
    {
        collection: 'admins',
    }
);


// AdminSchema.index({ _id: 1 }, { sparse: true });

export const Admin = mongoose.model('Admin', AdminSchema);
export const AdminTC = composeWithMongoose(Admin);