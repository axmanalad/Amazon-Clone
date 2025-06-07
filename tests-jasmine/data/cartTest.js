import {addToCart, cart, loadFromStorage} from "../../data/cart.js";

describe('test suite: addToCart', () => {
  it('adds an existing product to the cart', () => {
    const mockSetItem = jasmine.createSpy('setItem');
    const mockGetItem = jasmine.createSpy('getItem').and.returnValue(JSON.stringify([{
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 1,
      deliveryOptionId: '1'
    }]));
    const originalLocalStorage = window.localStorage;

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

    // Restore original localStorage
    Object.defineProperty(window, 'localStorage', {
      value: originalLocalStorage,
      configurable: true
    });
  });

  // Flaky test: test that sometimes passes and sometimes fails
  // Needs a mock: replaces a method with a fake version
  // it('adds a new product to the cart', () => {
  //   addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
  //   expect(cart.length).toEqual(1);
  // });

  it('adds a new product to the cart', () => {
    const mockSetItem = jasmine.createSpy('setItem');
    const mockGetItem = jasmine.createSpy('getItem').and.returnValue(JSON.stringify([]));
    const originalLocalStorage = window.localStorage;

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

    // Restore original localStorage
    Object.defineProperty(window, 'localStorage', {
      value: originalLocalStorage,
      configurable: true
    });
  });
});