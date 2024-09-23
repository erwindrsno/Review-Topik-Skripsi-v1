import User from '../models/User.js';
import Role from '../models/Role.js';
import { Strategy as LocalStrategy } from 'passport-local'
import bcrypt from 'bcrypt'
import passport from "passport"

export default passport.use(new LocalStrategy(async (username, password, done) => {
    try {
        //harusnya validation dulu di frontend (min 8 char, harus ada special char, nomor dan capital);
        const loginUser = await User.findOne({ where: { username: username }, include: Role });
        //if user not found, then no error but false user
        if (!loginUser) return done(null, false, { message: "Incorrect username" });

        const passwordMatch = await bcrypt.compare(password, loginUser.password);
        //if password not match, then no error but still false user
        if (!passwordMatch) return done(null, false, { message: "Incorrect password" });

        done(null, loginUser);
    }
    catch (err) {
        //if error in db lookup
        done(err);
    }
}))

passport.serializeUser((user, cb) => {
    console.log("serializing user...");
    // console.log(user);
    cb(null, user.id);
});

passport.deserializeUser(async (id, cb) => {
    console.log("de-serializing user...");
    try{
        const user = await User.findByPk(id);
        cb(null,user);
    } catch (err){
        cb(err);
    }
});