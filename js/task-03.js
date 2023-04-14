const user1 = {
  firstName: "John",
  lastName: "Doe",
  friends: [
    { firstName: "Jane", lastName: "Doe" },
    { firstName: "Bob", lastName: "Smith" },
    { firstName: "Alice", lastName: "Wonderland" },
  ],
};

function showFriends() {
  this.friends.forEach((friend) => {
    console.log(`${friend.firstName} ${friend.lastName}`);
  });
}

showFriends.call(user1);

const user2 = {
  name: "Juan",
  surname: "Hernandez",
  friends: [
    { name: "Maria", surname: "Garcia" },
    { name: "Carlos", surname: "Rodriguez" },
    { name: "Ana", surname: "Lopez" },
  ],
};

function findFriends() {
  this.friends.forEach((friend) => {
    console.log(`${friend.name} ${friend.surname}`);
  });
}

findFriends.call(user2);
