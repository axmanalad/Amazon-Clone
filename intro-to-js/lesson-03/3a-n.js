// Lesson 3 Exercises - Strings

// a. Create the text 'My name is: ' as a string.
console.log("a. My name is: ");

// b. Create your name as a string (for example: 'Simon').
console.log("b. Alexander M.");

// c. Using concatenation, add the 2 strings from 3a and 3b together to create the text: 'My name is: __'.
console.log("c. My name is: " + "Alexander M.");

/* 
d. At a restaurant, you order 1 coffee ($5) and 1 bagel ($3). Using math, calculate the total cost, and using concatenation, create the text:
'Total cost: $__'.
*/
console.log("d. Total cost: $" + (5 + 3));

// e. Do the same thing as 3d, but use a template string and interpolation.
console.log(`e. Total cost: $${5 + 3}`);

// f. Display the text from 3e in a popup using alert(...);
alert(`f. Total cost: $${5 + 3}`);

/*
g. You order 1 coffee ($5.99) and 1 bagel ($2.95). Using math, calculate the total cost, and using concatenation, create the text:
'Total cost: $__'.
*/
console.log("g. Total cost: $" + ((599 + 295) / 100));

// h. Do the same thing as 3g, but use a template string and interpolation.
console.log(`h. Total cost: $${(599 + 295) / 100}`);

// i. Display the text from 3h in a popup.
alert(`i. Total cost: $${(599 + 295) / 100}`);

// j. Using a multi-line string, create the text from 3h and add a line of text underneath: 'Thank you, come again!'. Display both lines in a popup.
alert(`j. Total cost: $${(599 + 295) / 100}\nThank you, come again!`);

// Challenges
/*
In the Amazon project, update the cart to 2 basketballs ($20.95 each) with $4.99 shipping, and 2 t-shirts ($.7.99 each) with $4.99 shipping.

k. Using interpolation, create the first line of text (use math to calculate the numbers 4 and 57.88)
*/
console.log(`k. Items (${2*2}): $${((2 * 2095) + (2 * 799)) / 100}`);

// l. Create second line of text: 'Shipping ^ handling: $9.98' (use math)
console.log(`l. Shipping & handling: $${(499 + 499) / 100}`);

// m. Create third line: 'Total before tax: $67.86' (use math)
console.log(`m. Total before tax: $${((2 * 2095 + 499) + (2 * 799 + 499)) / 100}`);

// n. Create fourth line of text: 'Estimated tax (10%): $6.79' (use math and Math.round(...) to calculate the exact number).
console.log(`n. Estimated tax (10%): $${Math.round(((2 * 2095 + 499) + (2 * 799 + 499)) * 0.1) / 100}`);