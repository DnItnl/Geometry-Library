import { describe, it, expect } from "vitest";
import { ShapeFactory } from "../src/factories/ShapeFactory";
import { Circle } from "../src/shapes/Circle";
import { Rectangle } from "../src/shapes/Rectangle";
import { Triangle } from "../src/shapes/Triangle";

describe("ShapeFactory", () => {
  it("создает круг", () => {
    const circle = ShapeFactory.createShape("circle", 5);
    expect(circle).toBeInstanceOf(Circle);
  });

  it("создает прямоугольник", () => {
    const rect = ShapeFactory.createShape("rectangle", 3, 6);
    expect(rect).toBeInstanceOf(Rectangle);
  });

  it("создает треугольник", () => {
    const tri = ShapeFactory.createShape("triangle", 3, 4, 5);
    expect(tri).toBeInstanceOf(Triangle);
  });

  it("создает фигуру из JSON", () => {
    const data = { type: "circle", params: [4] };
    const circle = ShapeFactory.fromJSON(data);
    expect(circle).toBeInstanceOf(Circle);
  });

  it("бросает ошибку при неизвестном типе", () => {
    expect(() => ShapeFactory.createShape("hexagon", 10)).toThrow(
      /Unknown shape/,
    );
  });

  it("бросает ошибку при неправильном количестве параметров", () => {
    expect(() => ShapeFactory.createShape("circle", 1, 2)).toThrow();
    expect(() => ShapeFactory.createShape("rectangle", 4)).toThrow();
    expect(() => ShapeFactory.createShape("triangle", 3, 4)).toThrow();
  });

  it("бросает ошибку при null или undefined параметрах", () => {
    expect(() =>
      ShapeFactory.createShape("circle", undefined as any),
    ).toThrow();
    expect(() =>
      ShapeFactory.createShape("rectangle", null as any, 2),
    ).toThrow();
  });
});
