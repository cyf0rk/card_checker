// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5
];

// Check numbers in an array to validate a card
function validateCard(numArr) {
  let total = 0;
  for (let i = numArr.length - 1; i >= 0; i--) {
    let currNum = numArr[i];
    if ((numArr.length - 1 - i) % 2 === 1) {
      currNum *= 2;
      if (currNum > 9) {
        currNum -= 9;
      }
    }
    total += currNum;
  }

  return total % 10 === 0;
}

// Find invalid cards from validateCard(numArr) function and return invalid cards
function findInvalidCards(cards) {
  const invalid = [];

  for (let i = 0; i < cards.length; i++) {
    let currCard = cards[i];
    if (!validateCard(currCard)) {
      invalid.push(currCard);
    }
  }

  return invalid;
}

// Test findInvalidCards function
console.log(findInvalidCards([valid1, valid2, valid3, valid4, valid5])); // Shouldn't print anything because these are valid card numbers
console.log(
  findInvalidCards([invalid1, invalid2, invalid3, invalid4, invalid5])
);

console.log(findInvalidCards(batch));

// First digit is id of a card company, return an array of companies that have mailed invalid cards
function idInvalidCardCompanies(invalidBatch) {
  const companies = [];
  for (let i = 0; i < invalidBatch.length; i++) {
    switch (invalidBatch[i][0]) {
      case 3:
        if (companies.indexOf('Amex') === -1) {
          companies.push('Amex');
        }
        break;
      case 4:
        if (companies.indexOf('Visa') === -1) {
          companies.push('Visa');
        }
        break;
      case 5:
        if (companies.indexOf('Mastercard') === -1) {
          companies.push('Mastercard');
        }
        break;
      case 6:
        if (companies.indexOf('Discover') === -1) {
          companies.push('Discover');
        }
        break;
      default:
        console.log('Company not found');
    }
  }
  return companies;
}

console.log(idInvalidCardCompanies([invalid1])); // ['visa']
console.log(idInvalidCardCompanies([invalid2])); // ['mastercard']
console.log(idInvalidCardCompanies(batch)); // Companies that have mailed invalid cards
