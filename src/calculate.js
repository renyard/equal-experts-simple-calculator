export const clearAll = () => [];

export const clearOne = (expression) => {
  expression.pop();
  return expression;
};

export const addExpressionStep = (expression, value) => {
  if (!isNaN(expression[expression.length - 1]) && !isNaN(value)) {
    expression[expression.length - 1] += `${value}`;
  } else {
    expression.push(value);
  }
  return expression;
};

export const executeExpression = (expression) => {
  if (!expression.length) {
    return null;
  }

  return expression.reduce((_, current, i, a) => {
    const prev = a[i - 1];
    const next = a[i + 1];

    if (!/[+\-*/]/.test(current)) {
      return _;
    }

    const num1 = Number(prev);
    const num2 = Number(next);

    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Invalid number");
    }

    switch (current) {
      case "+":
        return num1 + num2;

      case "-":
        return num1 - num2;

      case "*":
        return num1 * num2;

      case "/":
        return num1 / num2;

      default:
        break;
    }
  }, 0);
};
