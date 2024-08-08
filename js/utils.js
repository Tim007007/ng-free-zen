/** example 1
 * @function calcSumm
 * @description the function counts the sum of the numbers
 * @param {number} num1 the first number
 * @param {number} num2 the second number
 * @throw {Error} if the argument is not a number
 * @returns {number} the result of the subtraction
 */

// 1. action with a string value, the function always takes with a capital letter
// 2. we take 2 lines and pass one comma two commas three to the function 2...  you need to substitute a comma at the end
// or replace it in the middle, etc
// the function removes spaces
// the function removes emojis

const calcSum = (num1, num2) => {
  if (!num1 || !num2) throw new Error("Invalid value");
  return num1 + num2;
};
/** example 2
//  * @function calcSumm
//  * @description the function counts the sum of the numbers
//  * @param {number} num1 - the first number
//  * @param {number} num2 - the second number
//  * @returns {number} - the argument is not a number
//  * @throws {Error} the result of the subtraction
//  */

const calcDifference = (num1, num2) => {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw new Error("Invalid value: both values must be numbers");
  }
  return num1 - num2;
};

/** example String - 1 delete the missing
 * @param {string} input -The original string with numbers separated by commas.
 * @param {string} toReplace - A string to replace (for example, "1").
 * @param {string} replacement -A replacement string (for example, "replacement").
 * @returns {string} -The modified line.
 */

function stringg(name, greeting = "Привет") {
  const message = `${greeting}, ${name}!`;
  return message.replace(/\s+/g, "");
}

const greeting1 = stringg("Алексей");
const greeting2 = stringg("Иван", "Здравствуйте");

console.log(greeting1);
console.log(greeting2);

/** example String - 2 deleted comma
 * @param {string}
 * @param {string}.
 * @returns {string} - Removing commas.
 */

function example2(lastName, greeting = "Привет") {
  const mail = `${greeting}, ${lastName}!`;
  return mail.replace(/[, ]+/g, "");
}

const greeting3 = example2("Алексей");
const greeting4 = example2("Иван", "Здравствуйте , , , , ");

console.log(greeting3);
console.log(greeting4);

/** example String - 3 emoji
 * @param {emoji} задаем
 * @param {string}.
 * @returns {string} -  добавление emoji
 */

function example3(firstName) {
  const emoji = "😊";
  const result = `${firstName}${emoji}`;
  return result;
}

const greeting5 = example3("Алексей");
console.log(greeting5);

/** example String - 4 deleted emoji
 * @param {emoji}
 * @param {string}.
 * @returns {string} - deleted emoji
 */

function example3(firstName, removeEmoji = false) {
  const emoji = "😊";
  let result = `${firstName}${emoji}`;
  if (removeEmoji) {
    result = result.replace(/[😊]/g, "");
  }
  return result;
}

const greeting5WithEmoji = example3("Тимати Яхууу");
console.log(greeting5WithEmoji);

const greeting5WithoutEmoji = example3("Тимати Яхууу", true);
console.log(greeting5WithoutEmoji);

// 2. on working with Boolean values - true false
// checkStrink  - true false
// ValidityNumber - true false

/** example boolean - example 1
 * @Num
 * @desition
 */

let num3 = 15;
let num4 = 59;

if (num3 > num4) {
  console.log("num 3 will be bigger than num 4");
} else {
  console.log("num 3 is not bigger than num 4");
}
/** example boolean - example 1
 * @Num
 * @desition
 */

let num5 = 15;
let num6 = 59;

if (num3 !== num4) {
  console.log("num 3 will be bigger than num 4");
} else {
  console.log("num 3 is not bigger than num 4");
}

let a = 5;
let b = "5";
console.log(a !== b);
// true, because the types are different (number и string)
console.log(a !== 5);
// false,because the values and types are equal
console.log(a !== 10);
// true,because the values are different

//Returns the numeric value of the symbol at the specified index
const my_string = "i have a string";
console.log(my_string[2]);

// Reduces the string to lowercase
let stringDown = "Hello buddy".toLowerCase();
// console.log(stringDown.toLowerCase());
// console.log('Hello'.toLowerCase()); // напрямую к строке применяем метод

//Converts the string to uppercase
let string = "Hello buddy";
console.log(string.toUpperCase());

//deletes from the beginning and from the end
const strWithWhitespace = "         hi    ";
console.log(strWithWhitespace.trim());

//Returns the index of the first and last occurrences- does any word and string contain
const my_string1 = "abcdefga big fox";
console.log(my_string1.indexOf("e"));
console.log(my_string1.lastIndexOf("g"));
console.log(my_string1.includes("big fox"));

const stringForSplit = "hello,world,universe";
console.log(stringForSplit.split(""));
console.log(stringForSplit.split(","));

console.log(stringForSplit.slice(1, 9));
console.log(stringForSplit.slice(12));
console.log(stringForSplit.splice(7, 5, "hey man"));

console.log(new String());