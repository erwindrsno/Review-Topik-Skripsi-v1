export const roleAuth = (allowedRole) => {
  return (req, res, next) => {
    const userRoles = req.user.roles;
    let arrRoles = [];

    userRoles.forEach((role,i) => {
      arrRoles[i] = role.role_name;
    });

    if(arrRoles.includes(allowedRole)){
      return next();
    }

    res.status(403).send("Permission denied!");
  }
}