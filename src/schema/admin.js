import { AdminTC } from '../models/admin';

const AdminQuery = {
    adminOne: AdminTC.getResolver('findOne')
};

const AdminMutation = {
    adminCreateOne: AdminTC.getResolver('createOne')
};

export { AdminQuery, AdminMutation };