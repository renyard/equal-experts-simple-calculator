import React from "react";

import Screen from "./components/Screen";
import Button from "./components/Button";

import {
  addExpressionStep,
  clearAll,
  clearOne,
  executeExpression,
} from "./calculate";

import "./App.css";

const OPERATORS = {
  PLUS: "+",
  MINUS: "−",
  MULTIPLY: "×",
  DIVIDE: "÷",
  EQUALS: "=",
};

const NUMBERS = {
  ONE: "1",
  TWO: "2",
  THREE: "3",
  FOUR: "4",
  FIVE: "5",
  SIX: "6",
  SEVEN: "7",
  EIGHT: "8",
  NINE: "9",
  ZERO: "0",
  DOT: ".",
};

const UTIL = {
  CLEAR_ALL: "C",
  CLEAR_ONE: "CE",
};

function App() {
  const [expression, setExpression] = React.useState([]);
  const [result, setResult] = React.useState(null);

  const updateExpression = (value) => {
    setExpression(addExpressionStep(expression, value));
  };

  return (
    <div>
      <Screen expression={expression} result={result} />
      <div className="grid grid-cols-4">
        <Button className="col-span-2" onClick={clearAll}>
          {UTIL.CLEAR_ALL}
        </Button>
        <Button onClick={() => clearOne(expression)}>{UTIL.CLEAR_ONE}</Button>
        <Button onClick={() => updateExpression("/")}>
          {OPERATORS.DIVIDE}
        </Button>

        <Button onClick={() => updateExpression("1")}>{NUMBERS.ONE}</Button>
        <Button onClick={() => updateExpression("2")}>{NUMBERS.TWO}</Button>
        <Button onClick={() => updateExpression("3")}>{NUMBERS.THREE}</Button>
        <Button onClick={() => updateExpression("*")}>
          {OPERATORS.MULTIPLY}
        </Button>

        <Button onClick={() => updateExpression("4")}>{NUMBERS.FOUR}</Button>
        <Button onClick={() => updateExpression("5")}>{NUMBERS.FIVE}</Button>
        <Button onClick={() => updateExpression("6")}>{NUMBERS.SIX}</Button>
        <Button onClick={() => updateExpression("-")}>{OPERATORS.MINUS}</Button>

        <Button onClick={() => updateExpression("7")}>{NUMBERS.SEVEN}</Button>
        <Button onClick={() => updateExpression("8")}>{NUMBERS.EIGHT}</Button>
        <Button onClick={() => updateExpression("9")}>{NUMBERS.NINE}</Button>
        <Button onClick={() => updateExpression("+")}>{OPERATORS.PLUS}</Button>

        <Button onClick={() => updateExpression("0")}>{NUMBERS.ZERO}</Button>
        <Button onClick={() => updateExpression(".")}>{NUMBERS.DOT}</Button>
        <Button
          onClick={() => setResult(executeExpression(expression))}
          className="col-span-2"
        >
          {OPERATORS.EQUALS}
        </Button>
      </div>
    </div>
  );
}

export default App;
