function calculateTax(amount) {
  let tax = amount * 0.1;
  return tax;
}
console.log(calculateTax(100));


function convertToUpperCase(text) {
  let result = text.toUpperCase();
  return result;
}
console.log(convertToUpperCase("tabitha"));


function findMaximum(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
console.log(findMaximum(6,10));

function isPalindrome(word) {
  let lowerWord = word.toLowerCase();
  let reversed = lowerWord.split("").reverse().join("");

  if (lowerWord === reversed) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome("madam"));


function calculateDiscountedPrice(originalPrice, discountPercentage) {
  let discount = (discountPercentage / 100) * originalPrice;
  let finalPrice = originalPrice - discount;
  return finalPrice;
}
console.log(calculateDiscountedPrice(100,20))
