import { describe, it, expect, vi } from "vitest";
import { Circle } from "../src/shapes/Circle";

describe("Circle", () => {
  it("должен корректно вычислять площадь", () => {
    const circle = new Circle(5);
    expect(circle.getArea()).toBeCloseTo(Math.PI * 25, 5);
  });

  it("должен корректно вычислять периметр", () => {
    const circle = new Circle(3);
    expect(circle.getPerimeter()).toBeCloseTo(2 * Math.PI * 3, 5);
  });

  it("должен выбрасывать ошибку при отрицательном радиусе", () => {
    expect(() => new Circle(-5)).toThrow();
  });
  it("должен эмитировать событие 'change' при изменении радиуса", () => {
    const circle = new Circle(10);
    const mockHandler = vi.fn();
    circle.addEventListener("change", mockHandler);
    circle.radius = 15;
    expect(mockHandler).toHaveBeenCalledTimes(1);
    expect(circle.radius).toBe(15);
  });

  it("не должен эмитировать событие 'change' при установке того же значения", () => {
    const circle = new Circle(10);
    const mockHandler = vi.fn();

    circle.addEventListener("change", mockHandler);
    circle.radius = 10;
    expect(mockHandler).not.toHaveBeenCalled();
    expect(circle.radius).toBe(10);
  });
});
