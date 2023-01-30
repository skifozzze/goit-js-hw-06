import users from "./users.js"

console.table(users)

const getUsersWithGender = (users, gender) => {
  
  const filteredGenders = users.filter(user => user.gender === gender);
  
  return filteredGenders.map(gender => gender.name)
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]