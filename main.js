// 1

function getDeltaFunction(numbersObject) {
    let a = numbersObject.a;
    let b = numbersObject.b;
    let c = numbersObject.c;

    function getDelta(newNumbersObject = {}) {
        a = newNumbersObject.a ?? a;
        b = newNumbersObject.b ?? b;
        c = newNumbersObject.c ?? c;
        return (b * b) - 4 * a * c;
    }
    return getDelta;
}

const getDelta = getDeltaFunction({ a: 1, b: 2, c: 3 });
console.log(getDelta()); // -8
console.log(getDelta({ b: 12 })); // 132
console.log(getDelta({ a: 4, b: 10 })); // 52
console.log(getDelta({ a: 4, b: 0 })); // -48

// The nested function returns NaN if any of the arguments are missing
console.log(getDeltaFunction({ a: 1, c: 3 })()); // NaN
console.log(getDeltaFunction({ a: 1, c: 3 })({ b: 15 })); // 213

// 2

function getPositiveSum(numbersArray){
    let positiveSum = 0;
    numbersArray.forEach(function(number){
        if (number > 0) {
            positiveSum = positiveSum + number;
        }
    });
    return positiveSum;
}

console.log(getPositiveSum([1, 2, 3, 4, 5]));

// 3

function countSheeps(sheepArray) {
    const isSheepPresent = sheepArray.filter(function(boolean){
        return boolean === true;
    });
    return isSheepPresent.length;
}

console.log(countSheeps([true, true, true, false,
    true, true, true, true, true, false, true, false,
    true, false, false, true, true, true, true, true,
    false, false, true, true]));

// 4

function findNeedleIndex(haystackArray){
    const needleIndex = haystackArray.findIndex(function(string) {
        return string === 'needle';
    });
    return `found the needle at position ${needleIndex}`;
}

console.log(findNeedleIndex(['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago']));

// 5

function getDoubledNumbers(numberArray) {
    return numberArray.map(function(number) {
        return number * 2;
    });
}

console.log(getDoubledNumbers([1, 2, 3]));

// 6

function getInvertedNumbersArray(numbersArray) {
    return numbersArray.map(function(number) {
        return number * -1;
    });
}

console.log(getInvertedNumbersArray([1, -2, 3, -4, 5]));

// 7

function calculateAverage(marksArray){
    let sum = 0;
    marksArray.forEach(function(number) {
        sum = sum + number;
    });
    return Math.floor(sum / marksArray.length);
}

console.log(calculateAverage([1, 2, 3, 4, 5]));

// 8

function isStringInArray(stringArray, searchedString){
    const foundString =  stringArray.find(function(string) {
        return string === searchedString;
    });
    return foundString === searchedString;
}

console.log(isStringInArray(['Orange', 'Apple'], 'Apple'));
console.log(isStringInArray(['Onion', 'Cabbage'], 'Potato'));

// 9

function forEach(array, callback){
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i);
    }
}

const vegetables = ['Carrot', 'Cabbage', 'Onion'];

function printVegetable(vegetable, index) {
    console.log(vegetable, index);
}

forEach(vegetables, printVegetable);

const fruits = ['Apple', 'Orange', 'Watermelon'];
forEach(
    fruits,
    function(fruit, index) {
        console.log(fruit, index);
    }
)

// 10

function executeAfterFiveSeconds(callback, milliseconds = 5000){
    return setTimeout(callback, milliseconds);
}

function sayHello() {
    console.log('Hello!');
}

console.log(executeAfterFiveSeconds(sayHello));

// 11

function getRandomIntegerGenerator(lowestNumber, highestNumber) {
    function getRandomInteger() {
        return Math.floor(Math.random() * (highestNumber - lowestNumber + 1)) + lowestNumber;
    }
    return getRandomInteger;
}

// const getRandomDigit = getRandomIntegerGenerator(0, 9);
// getRandomDigit();

console.log(getRandomIntegerGenerator(-10, 10)());

// 12

// const redApple = {
//     color: 'red',
//     weightInGrams: 150
// };
//
// function findObjectProperty(object, callback) {
//
// }
//
// const propertyName = findObjectProperty(redApple, function(propertyValue) {
//     return propertyValue === 'red';
// });
// console.log(propertyName); // color
//
// const john = {
//     name: 'John',
//     bestFriend: {
//         name: 'Adam'
//     }
// };
//
// const adamPropertyName = findObjectProperty(john, function(propertyValue) {
//     return propertyValue && propertyValue.name === 'Adam';
// });
// console.log(adamPropertyName); // bestFriend

// 13

function getRandomCharacterGenerator(string) {
    function getRandomCharacter() {
        const splitStringLength = string.length;
        const randomIndex = Math.floor(Math.random() * splitStringLength);
        return string[randomIndex];
    }
    return getRandomCharacter;
}

const getRandomDigit = getRandomCharacterGenerator('0123456789');
console.log(getRandomDigit()); // returns a random string that contains a single digit

const getRandomABC = getRandomCharacterGenerator('abcABC');
console.log(getRandomABC()); // returns a random string that is a, A, b, B, c, or C

// 14

function getPrefixedStringGenerator(prefix) {
    function connectStrings(string) {
        return `${prefix}${string}`;
    }
    return connectStrings;
}

const prefixStringWithMister = getPrefixedStringGenerator('Mr.');
console.log(prefixStringWithMister(' John')); // Mr. John
console.log(prefixStringWithMister(' Adam')); // Mr. Adam

const prefixStringWithMiss = getPrefixedStringGenerator('Ms.');
console.log(prefixStringWithMiss(' Kate')); // Ms. Kate
console.log(prefixStringWithMiss(' Julie')); // Ms. Julie

const prefixStringWithNegative = getPrefixedStringGenerator('un');
console.log(prefixStringWithNegative('happy')); // unhappy
console.log(prefixStringWithNegative('productive')); // unproductive
console.log(prefixStringWithNegative('fair')); // unfair