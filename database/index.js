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

    //this can be validate with try catch method
    const admin = await Role.findOrCreate({
        where : {roleName: "admin"},
        defaults : {roleName: "admin"}
    });
    const dosen = await Role.findOrCreate({
        where : {roleName: "dosen"},
        defaults : {roleName: "dosen"}
    });
    const mahasiswa = await Role.findOrCreate({
        where : {roleName: "mahasiswa"},
        default: {roleName: "mahasiswa"}
    });
})();

export default db;