// 11A
const nums = [10, 20, 30];
nums[2] = 99;
console.log(nums);

// 11B
function getLastValue(array) {
  return array[array.length - 1];
}
console.log(getLastValue(nums));

// 11C
function arraySwap(array) {
  const first = array[0];
  const last = array[array.length - 1];
  array[0] = last;
  array[array.length - 1] = first;
  return array;
}
console.log(arraySwap(nums));

// 11D
console.log('11D');
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

// 11E
console.log('11E');
for (let i = 5; i >= 0; i--) {
  console.log(i);
}

// 11F
console.log('11F');
let i = 0;
while (i <= 10) {
  console.log(i);
  i += 2;
}

let j = 5;
while (j >= 0) {
  console.log(j);
  j--;
}

// 11G
console.log('11G');
const numbers = [1, 2, 3, 4, 5];
const newNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  newNumbers.push(numbers[i] + 1);
}
console.log(newNumbers);

// 11H
console.log('11H');
function addOne(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] + 1);
  }
  return newArray;
}
console.log(addOne(numbers));

// 11I
console.log('11I');
function addNum(array, num) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] + num);
  }
  return newArray;
}
console.log(addNum(numbers, 5));

// 11J
console.log('11J');
function addArrays(array1, array2) {
  const newArray = [];
  for (let i = 0; i < array1.length; i++) {
    newArray.push(array1[i] + array2[i]);
  }
  return newArray;
}
console.log(addArrays(numbers, [10, 20, 30, 40, 50]));

// 11K
console.log('11K');
function countPositive(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      count++;
    }
  }
  return count;
}
console.log(countPositive([-1, -2, -3, -4, -5]));

// 11L, 11M
console.log('11L-11M');
function minMax(nums) {
  if (nums.length === 0) {
    return { min: null, max: null };
  }
  let min = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
    }
    if (nums[i] > max) {
      max = nums[i];
    }
  }
  return { min, max };
}
console.log(minMax([1, -3, 5]));
console.log(minMax([-2, 3, -5, 7, 10]));
console.log(minMax([]));
console.log(minMax([3]));

// 11N
console.log('11N');
function countWords(words) {
  const wordCount = {};
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (wordCount[word]) {
      wordCount[word]++;
    } else {
      wordCount[word] = 1;
    }
  }
  return wordCount;
}
console.log(countWords(['apple', 'banana', 'apple', 'orange', 'banana', 'apple']));
console.log(countWords(['hello', 'world', 'hello', 'hello']));