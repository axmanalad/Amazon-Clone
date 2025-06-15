import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

export function calculateDeliveryProgress(order, productDetails) {
  const currentTime = dayjs();
  const orderTime = dayjs(order.orderTime);
  const deliveryTime = dayjs(productDetails.estimatedDeliveryTime);

  return ((currentTime - orderTime) / (deliveryTime - orderTime)) * 100;
}