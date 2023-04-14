const students = [
  { name: "Anton", age: 34, rating: 12 },
  { name: "Sergey", age: 30, rating: 12 },
  { name: "Pasha", age: 29, rating: 12 },
  { name: "Olexandra", age: 17, rating: 12 },
  { name: "Victor", age: 40, rating: 11 },
  { name: "Bogdan", age: 17, rating: 11 },
  { name: "Maks", age: 24, rating: 11 },
  { name: "Vladimir", age: 21, rating: 10 },
];

students.forEach((student) => {
  student.greet = function () {
    return `Hello! My name is ${this.name}, як справи?`;
  };
});

const greetings = students.map((student) => student.greet());
console.table(greetings);

const bestStudents = students.filter((student) => student.rating > 11);
console.table(bestStudents);

function addRating(points) {
  this.rating += points;
}

students.forEach((student) => addRating.call(student, 12));

console.log(students);
