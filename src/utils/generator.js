export const generateCode = (name, type, year, isOddSemester) => {
  // console.log("From generator " + name);
  // console.log("From generator " + type);
  // console.log("From generator " + year);
  // console.log("From generator " + isOddSemester);
  // const initials = nameInitialsGenerator(name);
  const initials = "";
  return initials;
}

export const name3InitialsGenerator = name => {
  const names = name.split(' ');
  let initials = "";
  for(let letter of names){
    initials += letter[0];
  }
  return initials;
}

export const name2InitialsGenerator = name => {
  const names = name.split(' ');
  let initials = names[0].charAt(0) + names[0].charAt(1) + names[1].charAt(0);
  return initials.toUpperCase();
}

export const name1InitialsGenerator = name => {
  let initials = "";
  let i = 0;
  while(i < 3){
    initials += name[i];
    i++;
  }
  return initials.toUpperCase();
}