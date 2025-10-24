import { Shape } from "../abstracts/Shape";

/**
 * Треугольник
 *
 * @example
 * ```typescript
 * const tri = new Triangle(3, 4, 5);
 * console.log(tri.getPerimeter()); // 12
 * console.log(tri.getArea());      // 6
 * console.log(tri.getType());      // "Scalene"
 * console.log(tri.toString());
 * ```
 */
export class Triangle extends Shape {
  public readonly type = "Triangle";

  private _a: number;
  private _b: number;
  private _c: number;

  /**
   * Создает новый экземпляр треугольника
   *
   * @param a - Первая сторона треугольника (положительное число)
   * @param b - Вторая сторона треугольника (положительное число)
   * @param c - Третья сторона треугольника (положительное число)
   * @throws {Error} Если стороны не образуют допустимый треугольник
   *
   * @example
   * ```typescript
   * const tri = new Triangle(3, 4, 5);
   * ```
   */
  constructor(a: number, b: number, c: number) {
    super();

    this.validatePositive(a, "Side A");
    this.validatePositive(b, "Side B");
    this.validatePositive(c, "Side C");

    if (!Triangle.isValidTriangle(a, b, c)) {
      throw new Error(
        "Invalid triangle: the sum of any two sides must be greater than the third side.",
      );
    }

    this._a = a;
    this._b = b;
    this._c = c;
  }

  /**
   * Проверяет, могут ли стороны образовать треугольник
   * @param a Первая сторона
   * @param b Вторая сторона
   * @param c Третья сторона
   * @returns true, если треугольник возможен
   */
  public static isValidTriangle(a: number, b: number, c: number): boolean {
    return a + b > c && a + c > b && b + c > a;
  }

  public get a(): number {
    return this._a;
  }

  public get b(): number {
    return this._b;
  }

  public get c(): number {
    return this._c;
  }

  public set a(value: number) {
    if (!Triangle.isValidTriangle(value, this._b, this._c)) {
      throw new Error(
        "Invalid triangle: the sum of any two sides must be greater than the third side.",
      );
    }
    if (this._a !== value) {
      this._a = value;
      this.emitChange();
    }
  }

  public set b(value: number) {
    if (!Triangle.isValidTriangle(this._a, value, this._c)) {
      throw new Error(
        "Invalid triangle: the sum of any two sides must be greater than the third side.",
      );
    }
    if (this._b !== value) {
      this._b = value;
      this.emitChange();
    }
  }

  public set c(value: number) {
    if (!Triangle.isValidTriangle(this._a, this._b, value)) {
      throw new Error(
        "Invalid triangle: the sum of any two sides must be greater than the third side.",
      );
    }
    if (this._c !== value) {
      this._c = value;
      this.emitChange();
    }
  }

  /**
   * Рассчитать периметр треугольника
   *
   * @returns Периметр треугольника (a + b + c)
   *
   * @example
   * ```typescript
   * const tri = new Triangle(3, 4, 5);
   * console.log(tri.getPerimeter()); // 12
   * ```
   */
  public getPerimeter(): number {
    return this._a + this._b + this._c;
  }

  /**
   * Рассчитать площадь треугольника по формуле Герона
   *
   * @returns Площадь треугольника в квадратных единицах
   *
   * @example
   * ```typescript
   * const tri = new Triangle(3, 4, 5);
   * console.log(tri.getArea()); // 6
   * ```
   */
  public getArea(): number {
    const s = this.getPerimeter() / 2;
    return Math.sqrt(s * (s - this._a) * (s - this._b) * (s - this._c));
  }

  /**
   * Определяет тип треугольника по сторонам
   *
   * @returns "Equilateral" | "Isosceles" | "Scalene"
   *
   * @example
   * ```typescript
   * const tri = new Triangle(3, 3, 3);
   * console.log(tri.getType()); // "Equilateral"
   * ```
   */
  public getType(): "Equilateral" | "Isosceles" | "Scalene" {
    if (this._a === this._b && this._b === this._c) return "Equilateral";
    if (this._a === this._b || this._b === this._c || this._a === this._c)
      return "Isosceles";
    return "Scalene";
  }

  /**
   * @example
   * ```typescript
   * const tri = new Triangle(3, 4, 5);
   * console.log(tri.toString());
   * // "Triangle [a: 3, b: 4, c: 5, type: Scalene, area: 6.00, perimeter: 12]"
   * ```
   */
  public toString(): string {
    return `${this.type} [a: ${this._a}, b: ${this._b}, c: ${this._c}, type: ${this.getType()}, area: ${this.getArea().toFixed(2)}, perimeter: ${this.getPerimeter()}]`;
  }
}
