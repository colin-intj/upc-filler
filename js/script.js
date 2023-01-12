'use strict';

/**
 * Fill in missing digits for UPCs which have a repeating digit in the middle.
 * @param {string} firstDigits - The digits at the beginning of the UPC
 * @param {string} lastDigits - The digits at the end of the UPC
 * @param {string} repeatingDigit - The repeating digit between the start and
 *     end of the UPC
 * @return {string} The product's full UPC
 */
const generateUPC = (firstDigits, lastDigits, repeatingDigit) => {
  const numberOfMissingDigits = 12 - (lastDigits.length + firstDigits.length);

  let fullUPC = firstDigits;
  for (let i = 0; i < numberOfMissingDigits; i++) {
    fullUPC += repeatingDigit;
  }
  fullUPC += lastDigits;

  return fullUPC;
};

document.getElementsByTagName('form')[0].onsubmit = () => {
  const firstDigits = document.getElementById('first-digits').value;
  const lastDigits = document.getElementById('last-digits').value;
  const repeatingDigit = document.getElementById('repeating-digit').value;

  const fullUPC = generateUPC(firstDigits, lastDigits, repeatingDigit);

  document.getElementById('full-upc').textContent = fullUPC;
};

document.getElementById('copy-upc').onclick = (event) => {
  const fullUPC = document.getElementById('full-upc').textContent;

  navigator.clipboard.writeText(fullUPC);
  event.target.textContent = 'Copied';
  setTimeout(() => {
    event.target.textContent = 'Copy UPC';
  }, 500);
};
