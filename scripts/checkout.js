import { renderCheckoutHeader } from './checkout/checkoutHeader.js';
import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {loadProducts, loadProductsFetch} from '../data/products.js';
import { loadCart } from '../data/cart.js';
// import '../data/cart-class.js';
// import '../data/backend-practice.js';

// Promises
// - better way to handle asynchronous code
// - similar to done() in Jasmine which waits for the asynchronous code to complete before running the next test [resolve: function that lets us control when to go to the next step]
// - let us wait for some code to finish before running the next code

// Promise.all()
// - lets us run multiple promises at the same time and wait for all of them to finish before running the next code

// Async
// - an even better way to handle asynchronous code
// - a shortcut for promises
// - makes a function return a promise
// Await
// - lets us wait for a promise to finish before running the next code
// - can only be used inside an async function

// Async/Await
async function loadPage() {
  try {
    // throw 'error1'; // Simulate an error

    await loadProductsFetch(); // Wait for the products to be loaded

    const value = await new Promise((resolve, reject) => {
      // throw 'error2'; // Simulate an error
      loadCart(() => {
        // reject('error3');
        resolve();
      });
    });

  } catch (error) {
    console.log('Unexpected error. Please try again later.');
  }

  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
}
loadPage();

// Promise.all() usage
// Promise.all([
//   loadProductsFetch(), // Returns a promise that resolves when the products are loaded
//   new Promise((resolve) => {
//     loadCart(() => {
//       resolve();
//     });
//   })

// ]).then((values) => {
//   console.log(values); // ['value1', undefined]
//   renderCheckoutHeader();
//   renderOrderSummary();
//   renderPaymentSummary();
// });


// Promise without using multiple promises
// new Promise((resolve) => {
//   loadProducts(() => {
//     resolve('value1');
//   });

// }).then((value) => { // Shares the value from the previous promise
//   console.log(value); // value1
//   return new Promise((resolve) => {
//     loadCart(() => {
//       resolve();
//     });
//   });

// }).then(() => {
//   renderCheckoutHeader();
//   renderOrderSummary();
//   renderPaymentSummary();
// });


// Callback
// loadProducts(() => {
//   loadCart(() => {
//     renderCheckoutHeader();
//     renderOrderSummary();
//     renderPaymentSummary();
//   });
// });
