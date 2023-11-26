import User from '../models/User.js';
import Role from '../models/Role.js';
import { Strategy as LocalStrategy } from 'passport-local'
import bcrypt from 'bcrypt'

export const initializePassport = passport => {
  passport.use(new LocalStrategy(async (username, password, done) => {
    try {
      //harusnya validation dulu di frontend (min 8 char, harus ada special char, nomor dan capital);
      const loginUser = await User.findOne({ where: { username: username } , include: Role });
      //if user not found, then no error but false user
      if (!loginUser) return done(null, false, { message: "Incorrect username" });

      const passwordMatch = await bcrypt.compare(password, loginUser.password);
      //if password not match, then no error but still false user
      if (!passwordMatch) return done(null, false, { message: "Incorrect password" });

      // const loginUserRoles = await loginUser.getRoles();

      // console.log(loginUserRoles[0].role_name);

      // const tes = JSON.stringify(loginUser.Roles, null, 2)

      // console.log(tes[0]);

      // console.log(loginUser.Roles[0].role_name);

      // res.status(200).send();

      return done(null, loginUser);
    }
    catch (err) {
      //if error in db lookup
      return done(err);
    }
  }))

  // passport.serializeUser((user, done) => {
  //   // console.log(user.Roles);
  //   done(null, { id: user.id, roles: user.Roles });
  //   // done(null, user.id);
  // });

  passport.serializeUser((user, cb) => {
    process.nextTick(() => {
      return cb(null, {
        id: user.id,
        roles: user.Roles,
      });
    });
  });

  passport.deserializeUser((user, cb) => {
    process.nextTick( () => {
      return cb(null, user);
    });
  });

  // passport.deserializeUser(async (serializedUser, done) => {
  //   try {
  //     const user = await User.findByPk(serializedUser.id);
  //     done(null, user);
  //   } catch (error) {
  //     done(error);
  //   }
  // });
}