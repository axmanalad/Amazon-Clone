import { renderCheckoutHeader } from './checkout/checkoutHeader.js';
import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {loadProducts} from '../data/products.js';
import { loadCart } from '../data/cart.js';
// import '../data/cart-class.js';
// import '../data/backend-practice.js';

// Promises
// - better way to handle asynchronous code
// - similar to done() in Jasmine which waits for the asynchronous code to complete before running the next test [resolve: function that lets us control when to go to the next step]
// - let us wait for some code to finish before running the next code

// Promise.all()
// - lets us run multiple promises at the same time and wait for all of them to finish before running the next code
Promise.all([
  new Promise((resolve) => {
    loadProducts(() => {
      resolve('value1');
    });
  }),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })

]).then((values) => {
  console.log(values); // ['value1', undefined]
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});


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

// loadProducts(() => {
//   loadCart(() => {
//     renderCheckoutHeader();
//     renderOrderSummary();
//     renderPaymentSummary();
//   });
// });
