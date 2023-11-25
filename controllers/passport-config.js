import User from '../models/User.js'
import { Strategy as LocalStrategy } from 'passport-local'
import bcrypt from 'bcrypt'

export const initializePassport = passport => {
  passport.use(new LocalStrategy(async (username, password, done) => {
    try {
      //harusnya validation dulu di frontend (min 8 char, harus ada special char, nomor dan capital);
      const loginUser = await User.findOne({ where: { username: username } });
      //if user not found, then no error but false user
      if (!loginUser) return done(null, false, { message: "Incorrect username" });

      const passwordMatch = await bcrypt.compare(password, loginUser.password);
      //if password not match, then no error but still false user
      if (!passwordMatch) return done(null, false, { message: "Incorrect password" });

      // res.status(200).send();
      console.log("enter");
      return done(null, loginUser);
    }
    catch (err) {
      //if error in db lookup
      return done(err);
    }
  }))

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      console.log("des user");
      const user = await User.findByPk(id);
      done(null, user);
    } catch (error) {
      done(error);
    }
  });
}