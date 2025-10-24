import { ShapeFactory } from "./factories/ShapeFactory";
import { IShape } from "./interfaces/IShape";

console.log("--- Демонстрация успешного создания фигур ---");

try {
  // 1. Создание Прямоугольника (Area = 5 * 10 = 50)
  const rectangle: IShape = ShapeFactory.createShape("rectangle", 5, 10);
  console.log(`Создан: Прямоугольник`);
  console.log(`  Площадь: ${rectangle.getArea()}`);
  console.log(`  Периметр: ${rectangle.getPerimeter()}`);

  // 2. Создание Круга (Radius = 3)
  const circle: IShape = ShapeFactory.createShape("circle", 3);
  console.log(`Создан: Круг`);
  console.log(`  Площадь: ${circle.getArea().toFixed(2)}`); // ~28.27
  console.log(`  Периметр: ${circle.getPerimeter().toFixed(2)}`); // ~18.85

  // 3. Создание Треугольника (Египетский: 3, 4, 5, Area = 6)
  const triangle: IShape = ShapeFactory.createShape("triangle", 3, 4, 5);
  console.log(`Создан: Треугольник`);
  console.log(`  Площадь: ${triangle.getArea()}`);
  console.log(`  Периметр: ${triangle.getPerimeter()}`);

  // 4. Создание из JSON
  const jsonCircleData = { type: "circle", params: [5] };
  const jsonCircle = ShapeFactory.fromJSON(jsonCircleData);
  console.log(`Создан: Круг из JSON`);
  console.log(`  Площадь: ${jsonCircle.getArea().toFixed(2)}`);
} catch (e) {
  // В этом блоке не должно быть ошибок, если параметры корректны
  if (e instanceof Error) {
    console.error(`Неожиданная ошибка при создании фигур: ${e.message}`);
  }
}
