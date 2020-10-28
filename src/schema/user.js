import { UserTC } from '../models/user';

const UserQuery = {
    userById: UserTC.getResolver('findById'),
    userOne: UserTC.getResolver('findOne'),
    userMany: UserTC.getResolver('findMany').addFilterArg({
            name: 'nameLike',
            type: 'String', // 
            description: 'Search by regExp',
            query: (rawQuery, value) => {
              rawQuery.name = new RegExp(value, 'i');
            },
          })
};

const UserMutation = {
    userCreateOne: UserTC.getResolver('createOne'),
    userUpdateById: UserTC.getResolver('updateById'),
    userRemoveById: UserTC.getResolver('removeById')
};

export { UserQuery, UserMutation };