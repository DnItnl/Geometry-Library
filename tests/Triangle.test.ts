import { describe, it, expect, vi } from "vitest";
import { Triangle } from "../src/shapes/Triangle";

describe("Triangle", () => {
  const sides = [3, 4, 5] as const;
  it("должен корректно вычислять площадь (3,4,5)", () => {
    const tri = new Triangle(...sides);
    expect(tri.getArea()).toBeCloseTo(6, 5);
  });

  it("должен корректно вычислять периметр", () => {
    const tri = new Triangle(...sides);
    expect(tri.getPerimeter()).toBe(12);
  });

  it("должен выбрасывать ошибку при некорректных сторонах", () => {
    expect(() => new Triangle(1, 2, 10)).toThrow();
  });

  it("должен эмитировать событие 'change' при изменении стороны 'a'", () => {
    const tri = new Triangle(...sides);
    const mockHandler = vi.fn();
    tri.addEventListener("change", mockHandler);
    tri.a = 6;
    expect(mockHandler).toHaveBeenCalledTimes(1);
    expect(tri.a).toBe(6);
  });

  it("должен эмитировать событие 'change' при изменении стороны 'b'", () => {
    const tri = new Triangle(...sides);
    const mockHandler = vi.fn();
    tri.addEventListener("change", mockHandler);
    tri.b = 3.5;
    expect(mockHandler).toHaveBeenCalledTimes(1);
    expect(tri.b).toBe(3.5);
  });

  it("должен эмитировать событие 'change' при изменении стороны 'c'", () => {
    const tri = new Triangle(...sides);
    const mockHandler = vi.fn();
    tri.addEventListener("change", mockHandler);
    tri.c = 3.5;
    expect(mockHandler).toHaveBeenCalledTimes(1);
    expect(tri.c).toBe(3.5);
  });

  it("не должен эмитировать событие 'change' при установке того же значения", () => {
    const tri = new Triangle(...sides);
    const mockHandler = vi.fn();
    tri.addEventListener("change", mockHandler);
    tri.a = 3;
    expect(mockHandler).not.toHaveBeenCalled();
  });
});
