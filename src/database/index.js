import db from './config.js'
import Role from '../models/Role.js';
import User from '../models/User.js';
import Period from '../models/Period.js';
import TopikSkripsi from '../models/TopikSkripsi.js';

// sync model to db
(async () => {
    //foreign key assignment
    User.belongsToMany(Role, { through: 'UserRole', foreignKey: 'user_id' });
    Role.belongsToMany(User, { through: 'UserRole', foreignKey: 'role_id'});

    User.hasMany(TopikSkripsi);
    TopikSkripsi.belongsTo(User);

    User.hasMany(TopikSkripsi);
    TopikSkripsi.belongsTo(User);
    
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
        // const period = await Period.create({
        //     isOddSemester: true,
        //     year: "2023/2024"
        // });
    } catch{
        throw new Error('Error creating roles');
    }
})();

export default db;