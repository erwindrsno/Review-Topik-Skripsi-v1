export const generateCode = (name, type, year, isOddSemester) => {
  // console.log("From generator " + name);
  // console.log("From generator " + type);
  // console.log("From generator " + year);
  // console.log("From generator " + isOddSemester);
  const initials = nameInitialsGenerator(name);
  return initials;
}

export const nameInitialsGenerator = name => {
  const names = name.split(' ');
  let initials = "";
  for(let letter of names){
    initials += letter[0];
  }
  return initials;
}