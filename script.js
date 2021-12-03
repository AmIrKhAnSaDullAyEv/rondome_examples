// Функции в JS

// метод написание декларационной функции. funtion имя функция()  {}

// function sum() {
//     let num = 5 + 5;
//     return num;
// }

// console.log(sum());

// function sum(num1, num2) {
//     let num = num1 + num2;
//     return num;
// }

// console.log(sum(10, 20));

// let a = 10;

// console.log(sum(20, a));

// console.log(sum(5, sum(5,5)));

// console.log(sum());

// function sum(num1 = 10, num2 = 50) {
//     let num = num1 + num2;
//     return num;
// }

// console.log(sum(1,2));

// let answer = sum()

// console.log(answer);

// Math - это работа с математикой
// Math.random() - отдает случайные числа от 0 до 1 (1 никогда не выдает)



// console.log(Math.random());

// do{
//     var a = +prompt('введите первое число');
// }while(isNaN(a) || a == '');

// do{
//     var b = +prompt('введите второе число');
// }while(isNaN(b) || b == '')


// function random(a, b) {
//     let num = Math.floor(Math.random() * (b + 1 - a) + a);
//     return num;
// }


// alert(random(a, b));

do{
    var min = +prompt('введите первое число');
}while(isNaN(min) || min == '');

do{
    var max = +prompt('введите второе число');
}while(isNaN(max) || max == '')

function random(min, max) {
    let rand = Math.floor(Math.random() * (max + 1 - min) + min);
    return rand;
}

for(let i = 1; i <= 10; i++) {
    var a = random(min, max);
    var b = random(min, max);
    var ans = prompt(a + ' + ' + b);
    console.log('Ваш ответ: ' + ans + ' Правильный ответ: ' + (a + b));
}

