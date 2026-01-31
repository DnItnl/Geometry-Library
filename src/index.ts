import { ShapeFactory } from "./factories/ShapeFactory";
import { IShape } from "./interfaces/IShape";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question: string): Promise<string> {
  return new Promise((resolve) => rl.question(question, resolve));
}

async function main() {
  try {
    console.log("Доступные фигуры: rectangle, circle, triangle");

    const type = (await ask("Какую фигуру создать? ")).trim();

    let params: number[] = [];

    switch (type) {
      case "rectangle":
        params.push(
          Number(await ask("Введите ширину: ")),
          Number(await ask("Введите высоту: ")),
        );
        break;

      case "circle":
        params.push(Number(await ask("Введите радиус: ")));
        break;

      case "triangle":
        params.push(
          Number(await ask("Сторона A: ")),
          Number(await ask("Сторона B: ")),
          Number(await ask("Сторона C: ")),
        );
        break;

      default:
        throw new Error("Неизвестный тип фигуры");
    }

    const shape: IShape = ShapeFactory.createShape(type, ...params);

    console.log("\nФигура создана:");
    console.log(shape.toString());
  } catch (e) {
    if (e instanceof Error) {
      console.error("Ошибка:", e.message);
    }
  } finally {
    rl.close();
  }
}

main();
