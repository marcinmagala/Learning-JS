'use strict';

// Zamiana miejscami elementów tablicy

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = ['a', 'b', 'c', 'd', 'e'];
// let arr3 = [];

// Normal function

// const changePlace = function (arr) {
//   if (arr.length > 1) {
//     arr = [arr.at(-1), ...arr.slice(1, -1), arr[0]];
//   } else {
//     arr;
//   }

//   console.log(arr);
// };

// Arrow function

// const changePlace = arr =>
//   arr.length > 1
//     ? console.log((arr = [arr.at(-1), ...arr.slice(1, -1), arr[0]]))
//     : console.log(arr);

// changePlace(arr1);
// changePlace(arr2);
// changePlace(arr3);

// ######################################
// ######################################
// ######################################

// Zliczanie wartości w tablicach dwuwymiarowych

// let tab1 = [
//   [1, 0, 0, 1],
//   [0, 0, 0, 1],
//   [1, 1, 0, 0],
//   [0, 1, 1, 0],
// ];
// let tab2 = [[1, 0, 0, 1], 1, [0, 0, 0, 1], [1, 1, 0, 0], [0, 1, 1, 0]];
// let tab3 = [
//   [1, 0, [1, 0, 1], 0, 1],
//   1,
//   [0, 0, 0, 1],
//   [1, 1, 0, 0],
//   [0, 1, 1, 0],
// ];

// Pętla forEach

// const sumValue = function (tab) {
//   let arrTemp = [];
//   let sum = 0; //Te dwie zmienne normalnie byłyby poza funkcją ale musiały zostać ukryte w scope funkcji żeby za każdym wywołaniem funkcji przyjmowały takie same początkowe wartości

//   tab.forEach(arr =>
//     typeof arr === 'object' ? arrTemp.push(...arr) : arrTemp.push(arr)
//   );
//   //   console.log(arrTemp);
//   arrTemp.forEach(item =>
//     typeof item === 'object'
//       ? item.forEach(pin => {
//           sum = sum + pin;
//         })
//       : (sum = sum + item)
//   );
//   console.log(sum);
// };

// sumValue(tab1);
// sumValue(tab2);
// sumValue(tab3);

// Pętla for

// const sumValue = function (tab) {
//   let sum = 0; //Te dwie zmienne normalnie byłyby poza funkcją ale musiały zostać ukryte w scope funkcji żeby za każdym wywołaniem funkcji przyjmowały takie same początkowe wartości
//   for (let i = 0; i < tab.length; i++) {
//     if (typeof tab[i] === 'object') {
//       for (let j = 0; j < tab[i].length; j++) {
//         if (typeof tab[i][j] === 'object') {
//           for (let k = 0; k < tab[i][j].length; k++) {
//             sum = sum + tab[i][j][k];
//           }
//         } else {
//           sum = sum + tab[i][j];
//         }
//       }
//     } else {
//       sum = sum + tab[i];
//     }
//   }
//   console.log(sum);
// };
// sumValue(tab1);
// sumValue(tab2);
// sumValue(tab3);

// ######################################
// ######################################
// ######################################

// Algorytmic two sum

// const arr = [2, 7, 11, 16];
// const target = 13;

// let tempSum;

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 1; j < arr.length; j++) {
//     // console.log(arr[j]);
//     if (arr[i] + arr[j] === target) {
//       console.log(i, j);
//     }
//   }
// }

// for (let i = 0; i < arr.length; i++) {
//   tempSum = target - arr[i];
// }

//HASHMAP

// const twoSum = function (arr, target) {
//   const previousValue = {};
//   for (let i = 0; i < arr.length; i++) {
//     const currentNumber = arr[i];
//     const neededValue = target - currentNumber;
//     const index2 = previousValue[neededValue];
//     if (index2 != undefined) {
//       return [index2, i];
//     } else {
//       previousValue[currentNumber] = i;
//     }
//   }
// };

// console.log(twoSum(arr, target));

// const arr = [2, 7, 11, 16];
// const target = 13;

// const map = {};
// console.log(map[11]);
// map[2] = 0;
// console.log(map);

// console.log(map[6]);
// map[7] = 1;
// console.log(map);

// console.log(map[2]);
// console.log(map[2]);

// ######################################
// ######################################
// ######################################
