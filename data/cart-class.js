import { validDeliveryOption } from "./deliveryOptions.js";

class Cart {
  cartItems;
  #addedToCartTimeoutId;
  #localStorageKey;

  constructor(localStorageKey) {
    this.#localStorageKey = localStorageKey;
    this.#loadFromStorage();
  }

  #loadFromStorage() {
    this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey));

    if (!this.cartItems) {
      this.cartItems = [{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
        deliveryOptionId: '1'
      }, {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1,
        deliveryOptionId: '2'
      }];
    }
  }

  saveToStorage() {
    localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
  }

  addToCart(productId) {
    let matchingItem;

    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });
    const quantitySelector = document.querySelector(`.js-quantity-${productId}`) || 1;
    const quantity = Number(quantitySelector.value) || 1;
    if (matchingItem) {
      matchingItem.quantity += quantity;
    } else {
      this.cartItems.push({
        productId,
        quantity,
        deliveryOptionId: '1'
      });
    }

    this.saveToStorage();
  }

  removeFromCart(productId) {
    const newCart = [];
    
    this.cartItems.forEach((cartItem) => {
      if (cartItem.productId !== productId) {
        newCart.push(cartItem);
      }
    });

    this.cartItems = newCart;
    
    this.saveToStorage();
  }

  updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem;
    let productFound = false;

    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
        productFound = true;
      }
    });
    if (!productFound) {
      return
    }

    if (!validDeliveryOption(deliveryOptionId)) {
      return;
    }
    matchingItem.deliveryOptionId = deliveryOptionId;

    this.saveToStorage();
  }

  showAddedToCart(productId) {
    let addedToCart = document.querySelector(`.js-added-to-cart-${productId}`);
    addedToCart.classList.add('added-to-cart-visible');
    clearTimeout(this.#addedToCartTimeoutId);
    this.#addedToCartTimeoutId = setTimeout(function() {
      addedToCart.classList.remove('added-to-cart-visible');
    }, 2000);
  }

  calculateCartQuantity() {
    let cartQuantity = 0;
    this.cartItems.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    });
  
    return cartQuantity;
  }

  updateQuantity(productId, newQuantity) {
    this.cartItems.forEach((cartItem) => {
      if (cartItem.productId === productId) {
        cartItem.quantity = newQuantity;
      }
    });

    this.saveToStorage();
  }
}

const cart = new Cart('cart-oop');
const businessCart = new Cart('cart-business');

console.log(cart);
console.log(businessCart);
console.log(businessCart instanceof Cart); // true (instanceof checks if businessCart is an instance of Cart class)