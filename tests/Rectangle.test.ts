import { describe, it, expect, vi } from "vitest";
import { Rectangle } from "../src/shapes/Rectangle";

describe("Rectangle", () => {
  it("должен вычислять площадь", () => {
    const rect = new Rectangle(5, 10);
    expect(rect.getArea()).toBe(50);
  });

  it("должен вычислять периметр", () => {
    const rect = new Rectangle(5, 10);
    expect(rect.getPerimeter()).toBe(30);
  });

  it("должен выбрасывать ошибку при отрицательных сторонах", () => {
    expect(() => new Rectangle(-2, 3)).toThrow();
  });
  it("должен эмитировать событие 'change' при изменении ширины (width)", () => {
    const rect = new Rectangle(10, 5);
    const mockHandler = vi.fn();
    rect.addEventListener("change", mockHandler);

    rect.width = 20;

    expect(mockHandler).toHaveBeenCalledTimes(1);
    expect(rect.width).toBe(20);
  });

  it("должен эмитировать событие 'change' при изменении высоты (height)", () => {
    const rect = new Rectangle(10, 5);
    const mockHandler = vi.fn();
    rect.addEventListener("change", mockHandler);

    rect.height = 15;
    expect(mockHandler).toHaveBeenCalledTimes(1);
    expect(rect.height).toBe(15);
  });

  it("не должен эмитировать событие 'change' при установке того же значения", () => {
    const rect = new Rectangle(10, 5);
    const mockHandler = vi.fn();
    rect.addEventListener("change", mockHandler);

    rect.width = 10;
    expect(mockHandler).not.toHaveBeenCalled();
  });
});
