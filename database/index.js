import db from './config.js'
import Role from '../models/Role.js';
import User from '../models/User.js';

//foreign key assignment
User.belongsToMany(Role, { through: 'UserRole' });
Role.belongsToMany(User, { through: 'UserRole' });

// sync model to db
(async () => {
    await db.sync();
    console.log("===The table for all models were created!===");

    try{
        const admin = await Role.findOrCreate({
            where : {role_name: "admin"},
            defaults : {role_name: "admin"}
        });
        const dosen = await Role.findOrCreate({
            where : {role_name: "dosen"},
            defaults : {role_name: "dosen"}
        });
        const mahasiswa = await Role.findOrCreate({
            where : {role_name: "mahasiswa"},
            default: {role_name: "mahasiswa"}
        });
    } catch{
        throw new Error('Error creating roles');
    }
})();

export default db;