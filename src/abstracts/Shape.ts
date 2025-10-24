import { IShape } from "../interfaces/IShape";

/**
 * Абстрактный класс для всех геометрических фигур
 * Расширяет EventTarget для возможности обработки событий
 */
export abstract class Shape extends EventTarget implements IShape {
  /**
   * Тип фигуры (например, "Rectangle", "Circle", "Triangle")
   */
  public abstract readonly type: string;

  /**
   * Вычисляет площадь - должна быть реализована в подклассах
   *
   *
   * @returns Площадь в квадратных единицах
   */
  public abstract getArea(): number;

  /**
   * Вычисляет периметр - должна быть реализована в подклассах
   *
   * @returns Периметр в единицах длины
   */
  public abstract getPerimeter(): number;

  /**
   * Проверяет, что число положительное
   * @param value - Проверяемое значение
   * @param name - Имя параметра для сообщения об ошибке
   * @throws Error если значение не положительное
   */
  protected validatePositive(value: number, name: string): void {
    if (value <= 0 || !isFinite(value)) {
      throw new Error(`${name} должно быть положительным числом`);
    }
  }

  /**
   * Вызывает событие изменения при изменении свойств фигуры
   */
  protected emitChange(): void {
    this.dispatchEvent(new Event("change"));
  }

  /**
   * Возвращает строковое представление фигуры
   *
   * @returns Строковое представление фигуры
   */
  public toString(): string {
    return `${this.type} [area: ${this.getArea()}, perimeter: ${this.getPerimeter()}]`;
  }
}
