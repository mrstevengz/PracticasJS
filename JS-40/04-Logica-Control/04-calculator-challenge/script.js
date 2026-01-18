function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
      break;

    case "-":
      return num1 - num2;
      break;

    case "*":
      return num1 * num2;
      break;

    case "/":
      return num1 / num2;
      break;

    default:
      return "Error, please pick a valid operator";
  }
}

console.log(calculator(1, 2, "*"));
