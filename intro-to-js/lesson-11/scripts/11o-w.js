// Lesson 11-O
console.log('11-O');
const array = ['apple', 'banana', 'search', 'orange', 'search'];
const search = 'search';
let index = -1;

for (let i = 0; i < array.length; i++) {
  if (array[i] === search) {
    index = i;
    break;
  }
}

console.log(index);

// Lesson 11-P
console.log('11-P');
const array2 = ['apple', 'banana', 'search', 'orange', 'search'];
const search2 = 'search';
let index2 = -1;

for (let i = 0; i < array2.length; i++) {
  if (array2[i] === search2) {
    index2 = i;
    break;
  }
}
console.log(index2);

// Lesson 11-Q
console.log('11-Q');
function findIndex(array, word) {
  let index = -1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      index = i;
      break;
    }
  }

  return index;
}
console.log(findIndex(['apple', 'banana', 'search', 'orange'], 'search'));
console.log(findIndex(['apple', 'banana', 'orange'], 'search'));

// Lesson 11-R, 11-S, 11-T, 11-U
console.log('11-R, 11-S, 11-T, 11-U');
function removeEgg(foods) {
  const newFoods = foods.slice().reverse();
  let count = 0;
  for (let i = newFoods.length-1; i >= 0; i--) {
    if (newFoods[i] === 'egg') {
      count++;
      if (count === 2) {
        break;
      }
    }
  }
  return newFoods.reverse();
}
console.log(removeEgg(['egg', 'bacon', 'egg', 'toast', 'egg']));
console.log(removeEgg(['egg', 'bacon', 'egg', 'toast', 'egg', 'egg']));

// Lesson 11-V
console.log('11-V');
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

// Lesson 11-W
console.log('11-W');
function unique(array) {
  const uniqueArray = [];
  for (let i = 0; i < array.length; i++) {
    if (findIndex(uniqueArray, array[i]) === -1) {
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray;
}
console.log(unique(['apple', 'banana', 'apple', 'orange', 'banana']));