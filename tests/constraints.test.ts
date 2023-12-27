import { describe, expect, it } from "bun:test";
import { Percentage } from "../ch3_enforcing_constraints";

describe("Percentage tests", () => {
  describe("when value is less than 0", () => {
    it("should set percentage to 0", () => {
      const percentage = Percentage.makePercentage(0);

      expect(percentage.value).toBe(0);
    });
  });

  describe("when value is greater than 100", () => {
    it("should set percentage to 100", () => {
      const percentage = Percentage.makePercentage(120);

      expect(percentage.value).toBe(100);
    });
  });

  describe("when value is between 0 and 100", () => {
    it("should set percentage to value", () => {
      const percentage = Percentage.makePercentage(60);

      expect(percentage.value).toBe(60);
    });
  });
});
