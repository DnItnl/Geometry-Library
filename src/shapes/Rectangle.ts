import { Shape } from "../abstracts/Shape";

/**
 * Прямоугольник
 *
 * @example
 * ```typescript
 * const rect = new Rectangle(5, 10);
 * console.log(rect.getArea()); // 50
 * console.log(rect.getPerimeter()); // 30
 * console.log(rect.isSquare()); // false
 * ```
 */
export class Rectangle extends Shape {
  public readonly type = "Rectangle";

  private _width: number;
  private _height: number;

  /**
   * Создает новый экземпляр прямоугольника
   *
   * @param width - Ширина прямоугольника (должна быть положительным числом)
   * @param height - Высота прямоугольника (должна быть положительным числом)
   * @throws {Error} Если ширина или высота не являются положительным конечным числом
   *
   * @example
   * ```typescript
   * const rect = new Rectangle(10, 20);
   * ```
   */
  constructor(width: number, height: number) {
    super();

    this.validatePositive(width, "Width");
    this.validatePositive(height, "Height");

    this._width = width;
    this._height = height;
  }

  public get width(): number {
    return this._width;
  }

  public get height(): number {
    return this._height;
  }

  public set width(value: number) {
    this.validatePositive(value, "Width");
    if (this._width !== value) {
      this._width = value;
      this.emitChange();
    }
  }

  public set height(value: number) {
    this.validatePositive(value, "Height");
    if (this._height !== value) {
      this._height = value;
      this.emitChange();
    }
  }

  /**
   * Рассчитать площадь прямоугольника
   *
   * @returns Площадь прямоугольника в квадратных единицах (ширина × высота)
   *
   * @example
   * ```typescript
   * const rect = new Rectangle(5, 10);
   * console.log(rect.getArea()); // 50
   * ```
   */
  public getArea(): number {
    return this._width * this._height;
  }

  /**
   * Рассчитать периметр прямоугольника
   *
   * @returns Периметр прямоугольника (2 × (ширина + высота))
   *
   * @example
   * ```typescript
   * const rect = new Rectangle(5, 10);
   * console.log(rect.getPerimeter()); // 30
   * ```
   */
  public getPerimeter(): number {
    return 2 * (this._width + this._height);
  }

  /**
   * Рассчитать диагональ прямоугольника
   *
   * @returns Длина диагонали прямоугольника (√(ширина² + высота²))
   *
   * @example
   * ```typescript
   * const rect = new Rectangle(3, 4);
   * console.log(rect.getDiagonal()); // 5
   * ```
   */
  public getDiagonal(): number {
    return Math.sqrt(this._width ** 2 + this._height ** 2);
  }

  /**
   * Проверяет, является ли прямоугольник квадратом
   *
   * @returns True если прямоугольник является квадратом, иначе False
   *
   * @example
   * ```typescript
   * const rect = new Rectangle(5, 5);
   * console.log(rect.isSquare()); // true
   *
   * const rect2 = new Rectangle(5, 10);
   * console.log(rect2.isSquare()); // false
   * ```
   */
  public isSquare(): boolean {
    return this._width === this._height;
  }

  /**
   * @example
   * ```typescript
   * const rect = new Rectangle(5, 10);
   * console.log(rect.toString());
   * // "Rectangle [width: 5, height: 10, area: 50, perimeter: 30]"
   * ```
   */
  public toString(): string {
    return `${this.type} [width: ${this._width}, height: ${this._height}, area: ${this.getArea()}, perimeter: ${this.getPerimeter()}]`;
  }
}
