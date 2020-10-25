import { UserTC } from '../models/user';

const UserQuery = {
    userById: UserTC.getResolver('findById'),
    userOne: UserTC.getResolver('findOne'),
    userMany: UserTC.getResolver('findMany'),
};

const UserMutation = {
    userCreateOne: UserTC.getResolver('createOne'),
    userUpdateById: UserTC.getResolver('updateById'),
    userRemoveById: UserTC.getResolver('removeById')
};

export { UserQuery, UserMutation };