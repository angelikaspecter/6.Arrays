// arr.push(item); добавляет элемент в конец массива
// arr.unshift(item); добавляет элемент в начало массива
// arr.shift(); извлекает элемент с начала массива
// arr.pop(); извлекает элемент с конца массива
// arr.splice(index, deleteCount); добавляет/изменяет/удаляет внутренние и внешние элементы массива
// arr.slice(start, end); копирует элементы массива
// arr.concat(); создает новый массив в котором копирует все переданные массивы
// arr.indexOf(); ищет элемент в массиве начиная с индекса from (1 - нашел; -1 - не нашел)
// arr.inсludes(); тоже самое что и indexOf(), только на возврате true/false

// Задание 1
// Создать массив из 10 случайных чисел и написать несколько функций для работы с ним.
const numArray = [12, 14, 56, 74, 55, 954, 235, 254, 85, 156];
// 1. Функция принимает массив и выводит его на экран.
// function displayNumArr(arr) {
//     console.log(arr);
// }
// displayNumArr(numArray);
// function displaySingleItemsOfArr(arr) {
//     arr.forEach((item) => {
//         console.log(item);
//     })
// }
// displaySingleItemsOfArr(numArray);

// 2. Функция принимает массив и выводит только четные элементы.
// function displaySingleItemsOfArr(arr) {
//     const newArr = [];
//     arr.forEach((item) => {
//         if (item % 2 === 0) {
//             newArr.push(item);
//         }
//     })
//     console.log(newArr);
// }
// displaySingleItemsOfArr(numArray);

// 3. Функция принимает массив и возвращает сумму всех элементов массива.
// function displaySingleItemsOfArr(arr) {
//     let sumArr = 0;
//     arr.forEach((item) => {
//         sumArr += item;
//     })
//     console.log(sumArr);
// }
// displaySingleItemsOfArr(numArray);

// 4. Функция принимает массив и возвращает его максимальный элемент.
// function findMaxNum(arr) {
//     let maxNum = 0;
//     arr.forEach((item) => {
//         if (maxNum < item) {
//             maxNum = item;
//         }
//     })
//     return maxNum;
// }
// console.log(findMaxNum(numArray));

// 5. Функция добавления нового элемента в массив по указанному индексу.
// function addNewElem(arr, a, b) {
//     arr.splice(a, 0, b);
//     console.log(arr);
// }
// addNewElem(numArray, 1, 456);

// 6. Функция удаления элемента из массива по указанному индексу.
// function removeElem(arr, a, b) {
//     arr.splice(a, b);
//     return arr;
// }
// console.log(removeElem(numArray, 1, 2));


// Задание 2
// Создать еще один массив из 5 случайных чисел и написать следующие функции.
const numArray2 = [18, 69, 855, 235, 23];
// 1. Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из двух массивов без повторений.
function uniqArr(arr) {
    let numArray3 = arr.concat();
    for (let i = 0; i < numArray3.length; i++) {
        for (let j = i + 1; j < numArray3.length; j++) {
            if (numArray3[i] === numArray3[j]) {
                numArray3.splice(j--, 1);
            }
        }
    }
    return numArray3;
}
console.log(uniqArr(numArray.concat(numArray2)));

// 2. Функция принимает 2 массива и возвращает новый массив, в котором собраны общие элементы(то есть элементы, которые встречаются и в первом и во втором массивах) без повторений.

function genArrClean(arr1, arr2) {
    let numArray3 = [];
    arr1.forEach((item1) => {
        arr2.forEach((item2) => {
            if (item1 == item2) {
                numArray3.push(item1);
            }
        });
    });
    return numArray3;
}
console.log(genArrClean(numArray, numArray2));

// 3. Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из первого массива, которых нет во втором массиве.

function ArrDiff(arr1, arr2) {
    let numArray3 = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr1.indexOf(arr1[i]) !== -1) {
            arr2.splice(arr2.indexOf(arr1[i]), 1)
        }
    }
    numArray3 = [...arr1, ...arr2]
    return numArray3;
}
console.log(ArrDiff(numArray, numArray2));

// Задание 3
// Создать массив фруктов и отсортировать его по алфавиту.
const fruit = ['apple', 'grape', 'strawberry', 'banana'];
console.log(fruit.sort());
// Написать следующие функции.
// 1. Вывод на экран с помощью document.write() в виде списка(с помощью тегов ul и li).
function displayArrFruit() {
    document.write("<ul><li>apple</li><li>grape</li><li>strawberry</li><li>banana</li></ul>");
    document.close();
}
displayArrFruit();
// 2. Поиск фрукта в массиве. Функция принимает название фрукта и возвращает индекс найденного элемента или - 1, если не найден. Поиск должен быть нерегистрозависимым.
// function contains(arr, elem) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] == elem) {
//             return elem;
//         }
//     }
//     return false;
// }
function contains(arr, elem) {
    return arr.indexOf(elem) != -1;
}
console.log(contains(fruit, 'apple'));