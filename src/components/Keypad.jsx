import React, { Fragment } from "react";
import Button from "./Button";

const OPERATORS = {
  PLUS: "+",
  MINUS: "−",
  MULTIPLY: "×",
  DIVIDE: "÷",
};

const NUMBERS = {
  ZERO: "0",
  ONE: "1",
  TWO: "2",
  THREE: "3",
  FOUR: "4",
  FIVE: "5",
  SIX: "6",
  SEVEN: "7",
  EIGHT: "8",
  NINE: "9",
};

const UTIL = {
  CLEAR_ALL: "C",
  CLEAR_ONE: "CE",
};

const Keypad = () => {
  return (
    <>
      {Object.entries(UTIL).map(([id, label]) => (
        <Button key={id}>{label}</Button>
      ))}
      {Object.entries(NUMBERS).map(([id, label]) => (
        <Button key={id}>{label}</Button>
      ))}
      {Object.entries(OPERATORS).map(([id, label]) => (
        <Button key={id}>{label}</Button>
      ))}
    </>
  );
};

export default Keypad;
