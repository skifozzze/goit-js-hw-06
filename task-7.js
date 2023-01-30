import users from "./users.js"

console.table(users)
 

// const calculateTotalBalance = users =>
// users.map(user => user.balance).reduce((acc, balance) => acc + balance, 0)
// ;

const calculateTotalBalance = users =>   
users.reduce((acc, user) => acc + user.balance, 0)
;

console.log(calculateTotalBalance(users)); // 20916