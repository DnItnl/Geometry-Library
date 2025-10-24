import { Shape } from "../abstracts/Shape";

/**
 * Круг
 *
 * @example
 * ```typescript
 * const circle = new Circle(5);
 * console.log(circle.getArea());      // 78.53981633974483
 * console.log(circle.getPerimeter()); // 31.41592653589793
 * console.log(circle.getDiameter());  // 10
 * console.log(circle.toString());
 * ```
 */
export class Circle extends Shape {
  public readonly type = "Circle";

  private _radius: number;

  /**
   * Создает новый экземпляр круга
   *
   * @param radius - Радиус круга (должен быть положительным числом)
   * @throws {Error} Если радиус не является положительным конечным числом
   *
   * @example
   * ```typescript
   * const circle = new Circle(10);
   * ```
   */
  constructor(radius: number) {
    super();

    this.validatePositive(radius, "Radius");

    this._radius = radius;
  }

  /**
   * Получить радиус круга
   * @returns Радиус круга
   */
  public get radius(): number {
    return this._radius;
  }

  public set radius(value: number) {
    this.validatePositive(value, "Radius");
    if (this._radius !== value) {
      this._radius = value;
      this.emitChange();
    }
  }

  /**
   * Рассчитать диаметр круга
   *
   * @returns Диаметр круга (2 × радиус)
   *
   * @example
   * ```typescript
   * const circle = new Circle(5);
   * console.log(circle.getDiameter()); // 10
   * ```
   */
  public getDiameter(): number {
    return 2 * this._radius;
  }

  /**
   * Рассчитать длину окружности
   *
   * @returns Периметр (длина окружности) круга (2 × π × радиус)
   *
   * @example
   * ```typescript
   * const circle = new Circle(5);
   * console.log(circle.getPerimeter()); // 31.41592653589793
   * ```
   */
  public getPerimeter(): number {
    return 2 * Math.PI * this._radius;
  }

  /**
   * Рассчитать площадь круга
   *
   * @returns Площадь круга (π × радиус²)
   *
   * @example
   * ```typescript
   * const circle = new Circle(5);
   * console.log(circle.getArea()); // 78.53981633974483
   * ```
   */
  public getArea(): number {
    return Math.PI * this._radius ** 2;
  }

  /**
   * @example
   * ```typescript
   * const circle = new Circle(5);
   * console.log(circle.toString());
   * // "Circle [radius: 5, area: 78.54, perimeter: 31.42]"
   * ```
   */
  public toString(): string {
    return `${this.type} [radius: ${this._radius}, area: ${this.getArea().toFixed(2)}, perimeter: ${this.getPerimeter().toFixed(2)}]`;
  }
}
