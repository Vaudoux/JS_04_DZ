//Задание 1
/* Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число */

for (let i = 0; i <= 10; i++) {
    if (i === 0) {
        console.log(`${i} - это ноль`);
    } else if (i % 2 !== 0) {
        console.log(`${i} - нечетное число`);
    } else
        console.log(`${i} - четное число`);
}

//Задание 2
/* Дан массив [1, 2, 3, 4, 5, 6, 7]
Сделайте из этого массива следующий [1, 2, 3, 6, 7] */

const arr = [1, 2, 3, 4, 5, 6, 7];

arr.pop();
arr.pop();
arr.pop();
arr.pop();
arr.push(6, 7);
/* arr.push(7); */

console.log(arr);

//Задание 3
/* Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
1. Рассчитать сумму элементов этого массива
2. Найти минимальное число
3. Найти есть ли в этом массиве число 3 */


const array = [];
for(i = 0; i < 10; i++) {
array[i] = Math.floor(Math.random() * 10 );
}
array.pop();
array.pop();
array.pop();
array.pop();
array.pop();
console.log(array);


let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(`Сумма равна: ${sum}`);

const min = Math.min(...array);
console.log(min);


let desired = 3;
function findValue() {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === desired) {
            console.log('Цифра есть!');
        }
    }
    console.log('Цифра отсутствует');
}
findValue();


const elka = [];
for (let i = 0; i < 20; i++) {
    elka.push('x');
    console.log(elka);
}