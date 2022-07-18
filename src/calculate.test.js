import {
  clearAll,
  clearOne,
  addExpressionStep,
  executeExpression,
} from "./calculate";

describe("calculate", () => {
  describe("clearAll", () => {
    it("should return an empty expression", () => {
      expect(clearAll()).toEqual([]);
    });
  });

  describe("clearOne", () => {
    it("should remove the last element from the expression", () => {
      expect(clearOne(["1", "+", "2"])).toEqual(["1", "+"]);
    });

    it("should remove the last element from the expression with two digits", () => {
      expect(clearOne(["1", "+", "23"])).toEqual(["1", "+"]);
    });
  });

  describe("addExpressionStep", () => {
    it("should add single digits to the expression as the next element", () => {
      expect(addExpressionStep(["1", "+"], "2")).toEqual(["1", "+", "2"]);
    });

    it("should add multiple digits to the existing element in the expression", () => {
      expect(addExpressionStep(["1"], "2")).toEqual(["12"]);
    });

    it("should add operators as the next element in the expression", () => {
      expect(addExpressionStep(["1"], "+")).toEqual(["1", "+"]);
    });
  });

  describe("executeExpression", () => {
    it("should not execute an empty expression", () => {
      expect(executeExpression([])).toBeNull();
    });

    it("should execute a simple expression", () => {
      expect(executeExpression(["1", "+", "2"])).toEqual(3);
    });
  });
});
