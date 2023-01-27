import users from "./users.js"

console.table(users)

const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === color)
};

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

console.log(getUsersWithEyeColor(users, 'green'))