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


/*
Each element in an array has a numbered position known as its index. We can access individual items using their index, which is similar to referencing an item in a list based on the item’s position.

Arrays in JavaScript are zero-indexed, meaning the positions start counting from 0 rather than 1. Therefore, the first item in an array will be at position 0.

*/

const hello = 'Hello World';
console.log(hello[6]);


/*
Let’s learn about some built-in JavaScript methods that make working with arrays easier. These methods are specifically called on arrays to make common tasks, like adding and removing elements, more straightforward.

One method, .push(), allows us to add items to the end of an array. Here is an example of how this is used:
*/

const itemTracker = ['item 0', 'item 1', 'item 2'];

itemTracker.push('item 3', 'item 4');

console.log(itemTracker); 
// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];


const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('Wipe out the dust', 'Vaccum the house');
console.log(chores);
//Outout: ['wash dishes', 'do laundry', 'take out trash', 'Wipe out the dust', 'Vaccum the house'];
