import { IShape } from "../interfaces/IShape";
import { Circle } from "../shapes/Circle";
import { Rectangle } from "../shapes/Rectangle";
import { Triangle } from "../shapes/Triangle";

/**
 * Фабрика для создания геометрических фигур.
 *
 * Позволяет создавать экземпляры фигур по их типу и параметрам.
 *
 * @example
 * ```typescript
 * const rectangle = ShapeFactory.createShape("rectangle", 5, 10);
 * console.log(rect.getArea()); // 50
 *
 * const circle = ShapeFactory.createShape("circle", 3);
 * console.log(circle.getPerimeter()); // ~18.85
 *
 * const triangle = ShapeFactory.createShape("triangle", 3, 4, 5);
 * console.log(tri.getArea()); // 6
 * ```
 */
export class ShapeFactory {
  /**
   * Создает фигуру по заданному типу и параметрам
   *
   * @param type Тип фигуры (circle, rectangle, triangle)
   * @param params Параметры фигуры:
   *  - circle: радиус
   *  - rectangle: ширина, высота
   *  - triangle: три стороны
   *
   * @returns Объект фигуры, реализующий интерфейс IShape
   *
   * @throws {Error} Если тип фигуры неизвестен или переданы некорректные параметры
   */
  public static createShape(type: string, ...params: number[]): IShape {
    if (params.some((item) => item === undefined || item === null)) {
      throw new Error("Parameters cannot contain undefined or null values.");
    }
    switch (type.toLowerCase()) {
      case "circle": {
        const [radius] = params;
        if (params.length !== 1) {
          throw new Error(
            `Circle requires 1 parameter (radius), got ${params.length}`,
          );
        }
        return new Circle(radius!);
      }

      case "rectangle": {
        const [width, height] = params;
        if (params.length !== 2) {
          throw new Error(
            `Rectangle requires 2 parameters (width, height), got ${params.length}`,
          );
        }
        return new Rectangle(width!, height!);
      }

      case "triangle": {
        const [a, b, c] = params;
        if (params.length !== 3) {
          throw new Error(
            `Triangle requires 3 parameters (a, b, c), got ${params.length}`,
          );
        }
        return new Triangle(a!, b!, c!);
      }

      default:
        throw new Error(
          `Unknown shape type: "${type}". Expected one of: circle, rectangle, triangle.`,
        );
    }
  }

  /**
   * Пытается создать фигуру по JSON-объекту.
   *
   * @example
   * ```typescript
   * const shapeData = { type: "circle", params: [5] };
   * const shape = ShapeFactory.fromJSON(shapeData);
   * console.log(shape.getArea());
   * ```
   */
  public static fromJSON(data: { type: string; params: number[] }): IShape {
    return this.createShape(data.type, ...data.params);
  }
}
