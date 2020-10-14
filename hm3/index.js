alert("Task 1");
let numberFromUser = prompt("Введите число для возведения в квадрат");

alert("Результат возведения = " + numberFromUser ** 2);

alert("Task 2");
let number1 = + prompt("Введите первое число для вычисления среднего значения");
let number2 = + prompt("Введите второе число для вычисления среднего значения");
let average = (number1 + number2) / 2;

alert("Среднее значение = " + average);

alert("Task 3");
let squareSide = prompt("Введите длину стороны квадрата");
let squareArea = squareSide ** 2;
alert("Площадь квадрата = " + squareArea);

alert("Task 4");

const mileToKm = 0.621371;
let km = prompt("введите длинну в км");
let miles = km * mileToKm;
alert("Длинна в милях = " + miles.toFixed(2));
