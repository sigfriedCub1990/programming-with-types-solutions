import { describe, it, spyOn, expect } from "bun:test";
import { SingletonDecorator, WidgetFactory } from "../decorator_pattern";
import { makeWidget, singletonDecorator } from "../decorator_pattern_fp";

describe("WidgetFactory Decorator tests", () => {
  it("should build a Widget once", () => {
    const consoleSpy = spyOn(console, "log");

    const factory = new WidgetFactory();
    const decorator = new SingletonDecorator(factory);

    decorator.makeWidget();
    decorator.makeWidget();
    decorator.makeWidget();

    expect(consoleSpy).toHaveBeenCalledTimes(1);
    consoleSpy.mockClear();
  });

  describe("when using the functional approach", () => {
    it("should build a Widget once", () => {
      const consoleSpy = spyOn(console, "log");

      const decorator = singletonDecorator(makeWidget);

      decorator();
      decorator();
      decorator();

      expect(consoleSpy).toHaveBeenCalledTimes(1);
      consoleSpy.mockClear();
    });
  });
});
