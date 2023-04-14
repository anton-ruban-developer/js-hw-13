const user = {
  name: "Anton",
  balance: 1000,

  addMoney(amount) {
    this.balance += amount;
  },
  showBalance() {
    console.log(
      `Сумма на счету пользователя ${this.name} равна: ${this.balance} USD`
    );
  },
};
user.addMoney(500);
user.showBalance();

const users = [
  { name: "Alice", balance: 500 },
  { name: "Bob", balance: 200 },
  { name: "Charlie", balance: 1000 },
];

users.forEach((user) => {
  user.addMoney = function (amount) {
    this.balance += amount;
  };
});
users.forEach((user) => {
  user.addMoney(200);
});

const topUsers = users.filter((user) => user.balance > 800);
console.table(topUsers);

const balances = users.map((user) => user.balance);
console.table(balances);
user.showBalance.call(user);
user.showBalance.call(users[0]);
user.showBalance.call(users[1]);
