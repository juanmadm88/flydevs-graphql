import User from '../models/user';

const resolvers = {
    findByName: (_, args) => (User.find({ name: { $regex: `.*${args.name}.*` } }))
};

export default resolvers;