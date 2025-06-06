export function validateQuantity(quantity) {
  if (quantity >= 0 && quantity <= 999) {
    return true;
  }
  return false;
}