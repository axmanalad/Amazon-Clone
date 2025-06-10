import { renderOrderSummary } from "../../scripts/checkout/orderSummary.js";
import {cart} from "../../data/cart-class.js";
import { loadProducts, loadProductsFetch } from "../../data/products.js";

// Integration test for rendering the order summary
describe('test suite: renderOrderSummary', () => {
  const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
  const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';
  const originalLocalStorage = window.localStorage;
  // Hooks
  beforeAll((done) => {
    loadProductsFetch().then(() => {
      done();
    });
  });

  beforeEach(() => {
    document.querySelector('.js-test-container').innerHTML = `
      <div class="js-order-summary"></div>
      <div class="js-checkout-header"></div>
      <span class="js-checkout-item-count"></span>
      <div class="js-payment-summary"></div>
    `;
    const mockSetItem = jasmine.createSpy('setItem');
    const mockGetItem = jasmine.createSpy('getItem').and.returnValue(JSON.stringify([{
      productId: productId1,
      quantity: 2,
      deliveryOptionId: '1'
      }, {
      productId: productId2,
      quantity: 1,
      deliveryOptionId: '2'
    }]));

    // Mock localStorage
    Object.defineProperty(window, 'localStorage', {
      value: {
        setItem: mockSetItem,
        getItem: mockGetItem
      },
      configurable: true
    });

    cart.loadFromStorage();

    renderOrderSummary();
  });

  it('displays the cart', () => {
    expect(
      document.querySelectorAll('.js-cart-item-container').length
    ).toEqual(2);
    expect(
      document.querySelector(`.js-product-quantity-${productId1}`).innerText
    ).toContain('Quantity: 2');
    expect(
      document.querySelector(`.js-product-quantity-${productId2}`).innerText
    ).toContain('Quantity: 1');
  });

  it('removes a product', () => {
    document.querySelector(`.js-delete-link-${productId1}`).click();
    expect(
      document.querySelectorAll('.js-cart-item-container').length
    ).toEqual(1);
    expect(
      document.querySelector(`.js-cart-item-container-${productId1}`)
    ).toEqual(null);
    expect(
      document.querySelector(`.js-cart-item-container-${productId2}`)
    ).not.toEqual(null);
    expect(cart.cartItems.length).toEqual(1);
    expect(cart.cartItems[0].productId).toEqual(productId2);
  })

  it('display the correct product name', () => {
    const productName1 = document.querySelector(`.js-product-name-${productId1}`);
    const productName2 = document.querySelector(`.js-product-name-${productId2}`);
    expect(productName1.innerText).toContain('Black and Gray Athletic Cotton Socks - 6 Pairs');
    expect(productName2.innerText).toContain('Intermediate Size Basketball');
  });

  it('displays the correct product price', () => {
    const productPrice1 = document.querySelector(`.js-product-price-${productId1}`);
    const productPrice2 = document.querySelector(`.js-product-price-${productId2}`);
    expect(productPrice1.innerText).toContain('$10.90');
    expect(productPrice2.innerText).toContain('$20.95');
  });

  it('updates the delivery option', () => {
    const input = document.querySelector(`.js-delivery-option-${productId1}-3.delivery-option-input`);
    input.click();
    expect(input.checked).toEqual(true);
    expect(cart.cartItems.length).toEqual(2);
    expect(cart.cartItems[0].productId).toEqual(productId1);
    expect(cart.cartItems[0].deliveryOptionId).toEqual('3');
    
    expect(
      document.querySelector('.js-payment-summary-shipping').innerText
    ).toEqual('$14.98');
    expect(
      document.querySelector('.js-payment-summary-total').innerText
    ).toEqual('$63.50');
  });

  afterEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: originalLocalStorage,
      configurable: true
    });

    document.querySelector('.js-test-container').innerHTML = ``;
  });
});