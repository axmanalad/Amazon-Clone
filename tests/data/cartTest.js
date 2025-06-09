import {addToCart, cart, loadFromStorage, removeFromCart, updateDeliveryOption} from "../../data/cart.js";

let mockSetItem;
const originalLocalStorage = window.localStorage;
describe('test suite: addToCart', () => {
  beforeEach(() => {
    // Reset cart before each test
    cart.length = 0;
    mockSetItem = jasmine.createSpy('setItem');
  });

  it('adds an existing product to the cart', () => {
    const mockGetItem = jasmine.createSpy('getItem').and.returnValue(JSON.stringify([{
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 1,
      deliveryOptionId: '1'
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
    addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart.length).toEqual(1);
    expect(mockSetItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart[0].quantity).toEqual(2);
  });

  // Flaky test: test that sometimes passes and sometimes fails
  // Needs a mock: replaces a method with a fake version
  // it('adds a new product to the cart', () => {
  //   addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
  //   expect(cart.length).toEqual(1);
  // });

  it('adds a new product to the cart', () => {
    const mockGetItem = jasmine.createSpy('getItem').and.returnValue(JSON.stringify([]));

    // Mock localStorage
    Object.defineProperty(window, 'localStorage', {
      value: {
        setItem: mockSetItem,
        getItem: mockGetItem
      },
      configurable: true
    });

    loadFromStorage();
    addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart.length).toEqual(1);
    expect(mockSetItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart[0].quantity).toEqual(1);
  });

  afterEach(() => {
    // Clear the cart after each test
    cart.length = 0;

    // Restore original localStorage
    Object.defineProperty(window, 'localStorage', {
      value: originalLocalStorage,
      configurable: true
    });
  });
});

describe('test suite: removeFromCart', () => {
  const originalLocalStorage = window.localStorage;
  const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
  beforeEach(() => {
    const mockSetItem = jasmine.createSpy('setItem');
    const mockGetItem = jasmine.createSpy('getItem').and.returnValue(JSON.stringify([{
      productId: productId1,
      quantity: 1,
      deliveryOptionId: '1'
    }]));

    Object.defineProperty(window, 'localStorage', {
      value: {
        setItem: mockSetItem,
        getItem: mockGetItem
      },
      configurable: true
    });
    loadFromStorage();
  });

  it('removes a product that is in the cart', () => {
    removeFromCart(productId1);
    expect(cart.length).toEqual(0);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([]));
  });

  it('does not remove a product that is not in the cart', () => {
    removeFromCart('non-existent-product');
    expect(cart.length).toEqual(1);
    expect(cart[0].productId).toEqual(productId1);
    // Check if the cart looks correct, also check if localStorage.setItem was called and with the correct values
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 1,
      deliveryOptionId: '1'
    }]));
  });

  afterEach(() => {
    // Clear the cart after each test
    cart.length = 0;

    // Restore original localStorage
    Object.defineProperty(window, 'localStorage', {
      value: originalLocalStorage,
      configurable: true
    });
  });
});

describe('test suite: updateDeliveryOption', () => {
  const originalLocalStorage = window.localStorage;
  const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
  beforeEach(() => {
    const mockSetItem = jasmine.createSpy('setItem');
    const mockGetItem = jasmine.createSpy('getItem').and.returnValue(JSON.stringify([{
      productId: productId1,
      quantity: 1,
      deliveryOptionId: '1'
    }]));

    Object.defineProperty(window, 'localStorage', {
      value: {
        setItem: mockSetItem,
        getItem: mockGetItem
      },
      configurable: true
    });
    loadFromStorage();
  });

  it('updates the delivery option', () => {
    updateDeliveryOption(productId1, '3');
    expect(cart.length).toEqual(1);
    expect(cart[0].productId).toEqual(productId1);
    expect(cart[0].deliveryOptionId).toEqual('3');
    expect(cart[0].quantity).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{
      productId: productId1,
      quantity: 1,
      deliveryOptionId: '3'
    }]));
  });

  it('does not update delivery option for a product not in the cart', () => {
    updateDeliveryOption('non-existent-product', '3');
    expect(cart.length).toEqual(1);
    expect(cart[0].productId).toEqual(productId1);
    expect(cart[0].deliveryOptionId).toEqual('1');
    expect(cart[0].quantity).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(0);
  });

  it('does not update delivery option with an invalid delivery option ID', () => {
    updateDeliveryOption(productId1, 'invalid-option');
    expect(cart.length).toEqual(1);
    expect(cart[0].productId).toEqual(productId1);
    expect(cart[0].deliveryOptionId).toEqual('1');
    expect(cart[0].quantity).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(0);
  });
});