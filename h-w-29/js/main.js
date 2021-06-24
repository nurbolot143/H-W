/*1. Напишите функцию min(a,b), которая 
возвращает меньшее из чисел a и b.*/
function min(a, b) {
  if (a > b) {
    return b;
  } else {
    return a;
  }
}
let result = min(1, 5);
console.log(result);

/*2. Дано целое число. Если оно является положительным,
то прибавить к нему 1; в противном случае не изменять его.
Вывести полученное число. */
let number = 5;
if (number > 0) {
  console.log(number + 1);
} else {
  console.log(number);
}

/*3. Напишите функцию, которая вычисляет периметр квадрата*/
function p(a) {
  return 4 * a;
}
result = p(8);
console.log(result);

/*4. Напишите фукнцию, которая принимает два числа, если первое
больше второго, то вычислить их сумму, иначе - произведение. 
После этого вывести в консоль сообщение ЗАДАЧА РЕШЕНА. */
function sumOrMultiply(number1, number2) {
  if (number1 > number2) {
    return number1 + number2;
  } else {
    return number1 * number2;
  }
}
result = sumOrMultiply(2, 5);
console.log(result);
console.log("Задача решена");
