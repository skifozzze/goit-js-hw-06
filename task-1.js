import users from "./users.js"

console.log(users)

const getUserNames = users.map(user => {
  return user.name
})


console.log(getUserNames);
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]  