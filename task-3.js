import users from "./users.js"

console.table(users)

const getUsersWithGender = (users, gender) => {
  const findGender = users.map(user => user.gender);
  console.log(findGender)
  // if (findGender === gender) {
  //   return users.map(user => user.name)
  // }
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]