
function calculateTax(amount) {
  let tax = amount * 0.1;
  return tax;
}

function convertToUpperCase(text) {
  let result = text.toUpperCase();
  return result;
}


function findMaximum(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

function isPalindrome(word) {
  let lowerWord = word.toLowerCase();
  let reversed = lowerWord.split("").reverse().join("");

  if (lowerWord === reversed) {
    return true;
  } else {
    return false;
  }
}

// Function 5: calculateDiscountedPrice
function calculateDiscountedPrice(originalPrice, discountPercentage) {
  let discount = (discountPercentage / 100) * originalPrice;
  let finalPrice = originalPrice - discount;
  return finalPrice;
}
