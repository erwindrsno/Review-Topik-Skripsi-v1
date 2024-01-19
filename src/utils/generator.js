export const generateCode = (name, type, year, isOddSemester) => {
  // console.log("From generator " + name);
  // console.log("From generator " + type);
  // console.log("From generator " + year);
  // console.log("From generator " + isOddSemester);
  // const initials = nameInitialsGenerator(name);
  const initials = "";
  return initials;
}

export const initialGenerator = name => {
  const names = name.split(' ');
  let length = names.length;
  let results;
  switch(length){
    case 1: 
      results = singleNameInitial(names);
      break;

    case 2:
      results = doubleNameInitial(names);
      break;

    default:
      results = tripleNameInitial(names);
      break;
  }
  return results;
}

const singleNameInitial = names => {
  let initial = "";
  let i = 0;
  while(i < 3){
    initial += names[0].charAt(i);
    i++;
  }
  return initial.toUpperCase();
}

const doubleNameInitial = names => {
  let initial = (names[0].charAt(0) + names[0].charAt(1) + names[1].charAt(0)).toUpperCase();
  return initial;
}

const tripleNameInitial = names => {
  let initial = "";
  for(let letter of names){
    initial += letter[0];
  }
  return initial.toUpperCase();
}