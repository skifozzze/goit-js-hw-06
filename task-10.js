import users from './users.js';

console.table(users);

// const getNamesSortedByFriendsCount = users => {
//   const sortedFriends = [...users].sort(
//     (prevUser, nextUser) => prevUser.friends.length - nextUser.friends.length
//   );

//   return sortedFriends.map(user => user.name);
// };

const getSortedUniqueSkills = users =>
  users
    // .reduce((acc, user) => [...acc, ...user.skills], []) аналогічно
    .flatMap(user => user.skills)
    .filter((skill, index, arr) => arr.indexOf(skill) === index)
    .sort();

console.log(getSortedUniqueSkills(users));
console.table(users);

// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
