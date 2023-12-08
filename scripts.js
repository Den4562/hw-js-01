// Завдання 1 (2 бали)
// Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію
// `calculateEngravingPrice(message, pricePerWord)` приймаючу рядок (в рядку будуть
// тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну
// гравіювання всіх слів в рядку.

// const calculateEngravingPrice = function (message, pricePerWord) {
//     const words = message.split(' ');
//     const totalPrice = words.length * pricePerWord;
//     return totalPrice;

//   };
//   console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
// );

// # Завдання 2 (2 бали)

// Напиши функцію `findLongestWord(string)`, яка приймає параметром довільний рядок
// (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому
// рядку.

// const findWord = function (string) {

//     const words = string.split(' ');
  

//     let longWord = '';
//     for (const word of words) {
//       if (word.length > longWord.length) {
//         longWord = word;
//       }
//     }
  
//     return longWord;
//   };
  
//   console.log(findWord("The quick brown fox jumped over the lazy dog"));

//Завдання 3 (3-бали)

// Напиши функцію `formatString(string)` яка приймає рядок і форматує його якщо
// необхідно.

// - Якщо довжина рядка не перевищує `40 символів`, функція повертає її в
//   початковому   вигляді.
// - Якщо довжина більше `40 символів`, то функція обрізає рядок до 40-ка символів
//   і додає в кінець рядка три крапки `'...'`, після чого повертає   укорочену
//   версію.

// const formatString = function (string) {
//     const maxLength = 40;
  
//     if (string.length <= maxLength) {
 
//       return string;
//     } else {
    
//       const truncatedString = string.slice(0, maxLength - 3) + '...';
//       return truncatedString;
//     }
//   };
  
//   // Приклад використання
//   console.log(formatString("Curabitur ligula sapien, tincidunt non."));


// Завдання 4 (4 бали)
//   Напиши функцію `checkForSpam(message)`, приймаючу 1 параметр `message` - рядок.
// Функція перевіряє її на вміст слів `spam` і `sale`. Якщо знайшли заборонене
// слово, то функція повертає `true`, якщо заборонених слів немає функція повертає
// `false`. Слова в рядку можуть бути в довільному регістрі.



// const checkForSpam = function (message) {
  
//     const lowMessage = message.toLowerCase();
  

//     return lowMessage.includes('spam') || lowMessage.includes('sale');
//   };


//   console.log(checkForSpam("Latest technology news")); 

// console.log(checkForSpam("JavaScript weekly newsletter")); 

// console.log(checkForSpam("Get best sale offers now!")); 
