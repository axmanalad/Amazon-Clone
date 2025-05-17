// Lesson 2 Exercises - Numbers and Math

// a. At a restuarant, you order 1 soup for $10, 3 burgers for $8 each, and 1 ice cream for $5. Use JavaScript to calculate the cost of the order.
console.log("a. $" + (10 + (3 * 8) + 5));

// b. You're at a restaurant with 2 friends ( 3 people in total) and make the same order as 2a. Caclulate how much each person pays.
console.log("b. $" + (10 + (3 * 8) + 5) / 3);

// c. Calculate the total cost of a toaster ($18.50) and 2 shirts ($7.50 each).
console.log("c. $" + (18.50 + (2 * 7.50)));

// d. Calculate a 10% tax for the total in exercise 2c.
console.log(("d. $" + ((18.50 + (2 * 7.50)) * 0.1)));

// e. Calculate a 20% tax for the total in 2c (remember that 1% = 1/100, so 20% = 20/100 = 0.2).
console.log("e. $" + ((18.50 + (2 * 7.50)) * 0.2));

// In the Amazon Project, add a toaster ($18.99) to the cart to have 1 basketball, 1 t-shirt, and 1 toaster. Choose $4.99 shipping for the toaster.
// f. Calculate the cost of the products (before shipping and taxes). Hint: calculate in cents to avoid inaccuraries.
console.log("f. $" + ((2095 + 799 + 1899) / 100));

// g. Calculate the Total before tax (include shipping).
console.log("g. $" + (((2095 + 799 + 1899) / 100) + 4.99));

// h. Calculate the 10% tax exactly. Hint: use Math.round()
console.log("h. $" + (Math.round((((2095 + 799 + 1899 + 499) / 100)) * 0.1 * 100) / 100));

// i. Calculate the Order Total at the end (including tax and shipping).
console.log("i. $" + (Math.round((((((2095 + 799 + 1899 + 499) / 100)) * 0.1 * 100)) + (((2095 + 799 + 1899 + 499)))) / 100));

// j. Let's say we want to always round a number down (2.8 => 2) Using Google or an A.I. tool, search for the code to do this.
console.log("j. " + Math.floor(2.8));

// k. Let's always round a number up (2.2 => 3). Search how to do this.
console.log("k. " + Math.ceil(2.2));

// Challenges
// l. The temperature is 25 degrees Celsius. Calculate the temperature in Fahrenheit (77).
console.log("l. " + (25 * 9 / 5 + 32) + " degrees Fahrenheit.");

// m. The temperature is 86 degrees Fahrenheit. Calculate the temperature in Celsius (30).
console.log("m. " + ((86 - 32) * 5 / 9) + " degrees Celsius.");

// n. The temperature is -5 degrees Celsius. Calculate the temperature in Fahrenheit (23).
console.log("n. " + (-5 * 9 / 5 + 32) + " degrees Fahrenheit.");