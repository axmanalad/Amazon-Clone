import { renderOrderSummary } from "../../scripts/checkout/orderSummary.js";
import {cart, loadFromStorage} from "../../data/cart.js";

// Integration test for rendering the order summary
describe('test suite: renderOrderSummary', () => {
  const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
  const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';
  const originalLocalStorage = window.localStorage;
  // Hooks
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

    loadFromStorage();

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
    expect(cart.length).toEqual(1);
    expect(cart[0].productId).toEqual(productId2);
  })

  afterEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: originalLocalStorage,
      configurable: true
    });

    document.querySelector('.js-test-container').innerHTML = ``;
  });
});