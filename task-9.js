import users from './users.js';

console.table(users);

const getNamesSortedByFriendsCount = users => {
  const sortedFriends = [...users].sort(
    (prevUser, nextUser) => prevUser.friends.length - nextUser.friends.length
  );

  return sortedFriends.map(user => user.name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
