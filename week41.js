/*
    Hi.
    This is a set of practice exercises.
    The purpose is to train on a few things at a time.
    You do this by entering your answer after a task is given (see the example).

    DO NOT change any code given, unless the task specifically says to do so.
*/

/* -----------------------------------------------------------------------------
    Task: Example
    Write the code to print all names in the list, one name per line
*/
console.log("Task: Example");
const people = ["Tony", "Christian", "Håkon"];

for (let index = 0; index < people.length; index++) {
  let person = people[index];
  console.log(person);
}

/* -----------------------------------------------------------------------------
    Task: A

    1. Declare a variable to store the following values 0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55
    2. Declare a variable to keep the sum of the numbers from step 1.
    3. Use a for or while loop to sum the numbers from step 1 to the variable from step 2
    4. Make a generic function for step 3.
    
*/
console.log("Task: A");

const LIST_OF_NUMBERS = [0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55];
let sumListOfNumbers = sum(LIST_OF_NUMBERS);

function sum(liste) {
  let sum = 0;

  for (let num of liste) {
    sum += num;
  }
  return sum;
}

console.log("Task A answer: " + sumListOfNumbers);

/* -----------------------------------------------------------------------------
    Task: B

    1. Use a for loop to find the position of 'raspberry' in the list of fruits.
    2. Create a generic function that can find the position of any fruit in the list. 
*/
console.log("Task: B");

const fruits = [
  "apple",
  "banana",
  "orange",
  "grape",
  "kiwi",
  "mango",
  "pineapple",
  "pear",
  "peach",
  "plum",
  "watermelon",
  "blueberry",
  "raspberry",
  "blackberry",
  "strawberry",
  "cherry",
  "lemon",
  "lime",
  "pomegranate",
  "apricot",
];
let taskBAnswer = "";

for (let i = 0; i < fruits.length; i++) {
  let fruit = fruits[i];
  if (fruit === "raspberry") {
    taskBAnswer = i;
  }
}

function findPosition(list, value) {
  for (let i = 0; i < list.length; i++) {
    let fruit = list[i];
    if (fruit === value) {
      taskBAnswer = i;
    }
  }
  return taskBAnswer;
}
console.log("task B Answer: " + findPosition(fruits, "raspberry"));

/* -----------------------------------------------------------------------------
    Task: C

    1. Declare a new variable to store fruits that start with the letter 'b'.
    2. Use a for or while loop to copy over all fruits starting with 'b' to your new variable (the one you declared in point 1).
    3. Print the number of fruits that start with 'b' (hint: it will be the length of the list from point 2).
*/
console.log("Task: C");
let fruitsStartingWithLetterB = [];

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i][0] === "b") {
    fruitsStartingWithLetterB.push(fruits[i]);
  }
}

console.log(fruitsStartingWithLetterB);
console.log("Task C answer: " + fruitsStartingWithLetterB.length);

/* -----------------------------------------------------------------------------
    Task: D
    * Write the code to find the number of fruits in the list that have a name longer than 8 characters.
    * Print the count.
*/
console.log("Task: D");

let fruitsLongerThan8Characters = [];

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i].length > 8) {
    fruitsLongerThan8Characters.push(fruits[i]);
  }
}

console.log(fruitsLongerThan8Characters);
console.log("Task D answer: " + fruitsLongerThan8Characters.length);

/* -----------------------------------------------------------------------------
    Task: E
    
    Use loops (for or while) to prove that list A and list B contain exactly the same items.
*/
console.log("Task: E");

const A = [1, 4, 5, "Bananas", true, 3.14, 9.81];
const B = [1, 3.14, 5, 9.81, true, 4, "Bananas"];

function containsSameItems(listA, listB) {
  let sortedListA = listA.sort().slice();
  let sortedListB = listB.sort().slice();

  if (sortedListA.length !== sortedListB.length) {
    return false;
  }

  for (let i = 0; i < A.length; i++)
    if (sortedListA[i] !== sortedListB[i]) {
      return false;
    }
  return true;
}
console.log("task E answer: " + containsSameItems(A, B));
