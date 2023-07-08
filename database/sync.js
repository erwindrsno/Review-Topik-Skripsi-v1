import db from './index.js'
import Role from '../models/Role.js';
import User from '../models/User.js';

// sync model to db
(async () => {
    await db.sync();
    console.log("The table for all models were created!");
})();

export default db;