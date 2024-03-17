export const roleAuth = (allowedRole) => {
  return (req, res, next) => {
    const userRoles = req.user.roles;
    let arrRoles = [];

    userRoles.forEach((role,i) => {
      arrRoles[i] = role.role_name;
    });

    for(let j = 0; j < allowedRole.length; j++){
      if(arrRoles.includes(allowedRole[j])){
        return next();
      }
    }

    res.status(403).send("Permission denied!");
  }
}