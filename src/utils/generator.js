export const generateCode = (name, type, year, isOddSemester, count) => {
  let temp;
  if (type) { temp = "*" }

  const appendedYear = year => { return year.substring(0, 4)}

  const appendedSemester = isOddSemester => { return isOddSemester ? "1" : "2"; }

  const initials = nameInitialGenerator(name) + '-' + appendedYear(year) + appendedSemester(isOddSemester) + count + temp;
  return initials;
}

export const nameInitialGenerator = name => {
  const names = name.split(' ');
  let length = names.length;
  let results;
  switch (length) {
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
  while (i < 3) {
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
  for (let letter of names) {
    initial += letter[0];
  }
  return initial.toUpperCase();
}