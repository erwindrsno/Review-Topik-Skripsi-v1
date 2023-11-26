export const roleAuth = (allowedRole) => {
  return (req, res, next) => {
    const userRoles = req.user.roles;
    let arrRoles = [];

    userRoles.forEach((role,i) => {
      arrRoles[i] = role.role_name;
    });

    if(arrRoles.includes(allowedRole)){
      res.status(200)
      next();
    }

    else{
      res.status(403).send('Unauthorized!');
    }

  }
}