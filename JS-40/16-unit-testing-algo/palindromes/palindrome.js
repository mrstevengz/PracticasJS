function palindrome(str) {
  let palindrome = "";

  palindrome = str.split("").reverse().join("");

  return str === palindrome;
}

module.exports = palindrome;
