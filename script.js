// The switch keyword

/*
let groceryItem = 'papaya';

if (groceryItem === 'tomato') {
  console.log('Tomatoes are $0.49');
} else if (groceryItem === 'papaya'){
  console.log('Papayas are $1.29');
} else {
  console.log('Invalid item');
}

A switch statement provides an alternative syntax that is easier to read and write. A switch statement looks like this:

let groceryItem = 'papaya';

switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}

// Prints 'Papayas are $1.29'
*/

let athleteFinalPosition = 'first place';
switch (athleteFinalPosition) {
  case 'first place':
  console.log('You get the gold medal!');
  break;
  case 'second place':
  console.log('You get the silver medal!');
  break;
  case 'third place' :
  console.log('You get the bronze medal!');
  break;
  default: 
  console.log('No medal awarded.');
  break;
}



// -- Arrays -- 

//Arrays are JavaScript’s way of making lists. Arrays can store any data types (including strings, numbers, and booleans). Like lists, arrays are ordered, meaning each item has a numbered position.

let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];
console.log(newYearsResolutions);
 
// -- Create an Array -- 
/*
One way we can create an array is to use an array literal. An array literal creates an array by wrapping items in square brackets []. Remember from the previous exercise, arrays can store any data type — we can have an array that holds all the same data types or an array that holds different data types.
*/
const hobbies = ['Reading books', 'Swimming', 'Learn new languages'];
console.log(hobbies);

// -- Accessing Elements --
/*
Each element in an array has a numbered position known as its index. We can access individual items using their index, which is similar to referencing an item in a list based on the item’s position.
Arrays in JavaScript are zero-indexed, meaning the positions start counting from 0 rather than 1. Therefore, the first item in an array will be at position 0. Let’s see how we could access an element in an array:
*/
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

const listItem = famousSayings[0];
console.log(famousSayings[2]);
console.log(famousSayings[3]);

//You can also access individual characters in a string using bracket notation and the index
const hey = 'Hello World';
console.log(hey[6]);
// Output: W


// --  Update Elements -- 
// Once you have access to an element in an array, you can update its value.
let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];

seasons[3] = 'Autumn';
console.log(seasons); 
//Output: ['Winter', 'Spring', 'Summer', 'Autumn']
/*
In the example above, the seasons array contained the names of the four seasons.
However, we decided that we preferred to say 'Autumn' instead of 'Fall'.
The line, seasons[3] = 'Autumn'; tells our program to change the item at index 3 of the seasons array to be 'Autumn' instead of what is already there.
*/

// Task: Change the second element of the array groceryList to 'avocados'.
let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados';

// -- Arrays with let and const --
/*
You may recall that you can declare variables with both the let and const keywords. Variables declared with let can be reassigned.
Variables declared with the const keyword cannot be reassigned. However, elements in an array declared with const remain mutable. Meaning that we can change the contents of a const array, but cannot reassign a new array or a different value.
The instructions below will illustrate this concept more clearly. Pay close attention to the similarities and differences between the condiments array and the utensils array as you complete the steps.
*/
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

// Task 1.Below the two existing arrays, re-assign the element in index 0 of condiments to 'Mayo'. 
//Log the updated array, condiments, to the console.
condiments[0] = 'Mayo';
console.log(condiments);

// Task 2.
//Below your code from Step 1, reassign condiments to be a new array that contains a single string ['Mayo']
//Log the result to the console.
//Notice that you can re-assign elements in an array and re-assign an entire new array to a variable declared using the let keyword.
condiments = ['Mayo'];
console.log(condiments);

// Task 3. 
//Below your code from Step 2, re-assign the last item from the utensils array to 'Spoon'.
//Log the updated array to the console.
utensils[3] = 'Spoon';
 console.log(utensils);


// -- The .length property --
// One of an array’s built-in properties is length and it returns the number of items in the array. 
//We access the .length property just like we do with strings. Check the example below:
const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];

console.log(objectives.length); //output 3



// -- The method .push() --> allows us to add items to the end of an array. Here is an example of how this is used:

const itemTracker = ['item 0', 'item 1', 'item 2'];

itemTracker.push('item 3', 'item 4');

console.log(itemTracker); 
// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];


const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('Wipe out the dust', 'Vaccum the house');
console.log(chores);
//Outout: ['wash dishes', 'do laundry', 'take out trash', 'Wipe out the dust', 'Vaccum the house'];


// -- The .pop() Method

//Another array method, .pop(), removes the last item of an array.

const newItemTracker = ['item 0', 'item 1', 'item 2'];

const removed = newItemTracker.pop();

console.log(newItemTracker); 
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2

/*
In the example above, calling .pop() on the newItemTracker array removed item 2 from the end.
.pop() does not take any arguments, it simply removes the last element of newItemTracker.
.pop() returns the value of the last element. In the example, we store the returned value in a variable removed to be used for later.
.pop() is a method that mutates the initial array.
When you need to mutate an array by removing the last element, use .pop().
*/




// Some arrays methods that are available to JavaScript developers include: 
// .join(), .slice(), .splice(), .shift(), .unshift(), and .concat() amongst many others. 
//Using these built-in methods makes it easier to do some common tasks when working with arrays.

const daysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const remove = daysOfWeek.shift();

console.log('Removed day:', remove);

console.log('Rest of week:', daysOfWeek);

// Task 1
// Use the .shift() method to remove the first item from the array groceryList.
// Log the new groceryList to the console.
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.shift();
console.log(groceryList);


// Task 2 
// Under the code added in step 1, use the .unshift() method to add 'popcorn' to the beginning of your grocery list.
// After calling .unshift() on groceryList, log groceryList to the console.
// You may wish to delete the console.log() statement from the previous step.
groceryList.unshift('popcorn');
console.log(groceryList);


// Task 3
/*
You’re in a hurry so you decide to ask a friend to help you with your grocery shopping. You want him to pick up the 'bananas', 'coffee beans', and 'brown rice'.

Under the code you added for step 2, use .slice() to provide your friend with a list of these three things.

Log this part of the list to the console. Unlike the two previous checkpoints, you should do both of these steps in one line.
*/

console.log(groceryList.slice(1, 4));
console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');


// Task 4:
// After calling .slice() on groceryList
// log the grocery list to the console one more time.
console.log(groceryList);

// Notice that the groceryList array still contains the same items it had in Step 2. 
//That means .slice() is non-mutating!
// You can confirm this in the link in the previous step.
