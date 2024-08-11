// 1

function getDeltaFunction(numbersObject) {
    let a = numbersObject.a;
    let b = numbersObject.b;
    let c = numbersObject.c;

    function getDelta(newNumbersObject = {}) {
        if (newNumbersObject.a !== undefined) {
            a = newNumbersObject.a;
        }
        if (newNumbersObject.b !== undefined) {
            b = newNumbersObject.b;
        }
        if (newNumbersObject.c !== undefined) {
            c = newNumbersObject.c;
        }
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

function getPositiveSum(numbersArray) {
    let positiveSum = 0
    numbersArray.forEach(function(number) {
        if (number > 0) {
            positiveSum = positiveSum + number;
        }
    })
    return positiveSum;
}

console.log(getPositiveSum([1,2,3,4,5]));

// 3

function countSheeps(sheepArray) {
    return sheepArray.filter(function(isSheepPresent) {
        return isSheepPresent === true;
    }).length;
}

console.log(countSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]));

// 4

function findNeedleIndex(haystackArray) {
    return 'found the needle at position ' + haystackArray.findIndex(function(string) {
        return string === 'needle';
    });
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

function calculateAverage(marksArray) {
    let sum = 0
    marksArray.forEach(function(number) {
        sum = sum + number;
    })
    return Math.floor(sum / marksArray.length);
}

console.log(calculateAverage([1, 2, 3, 4, 5]));

// 8

function isStringInArray(stringArray, searchedString) {
    return stringArray.find(function(string) {
        return string === searchedString;
    }) === searchedString;
}

console.log(isStringInArray(['Orange', 'Apple'], 'Apple'));
console.log(isStringInArray(['Onion', 'Cabbage'], 'Potato'));

// 9

function forEach(array, functionName) {
    for (let i = 0; i < array.length; i++) {
        functionName(array[i], i);
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

function executeAfterFiveSeconds(functionName, milliseconds = 5000) {
    return setTimeout(functionName, milliseconds);
}

function sayHello() {
    console.log('Hello!');
}

console.log(executeAfterFiveSeconds(sayHello));

// 11

function getRandomIntegerGenerator(lowestNumber, highestNumber) {
    function randomInteger(minimumInteger, maximumInteger) {
        return Math.floor(Math.random() * (maximumInteger - minimumInteger + 1)) + minimumInteger;
    }
    return function() {
        return randomInteger(lowestNumber, highestNumber);
    };
}

const getRandomDigit = getRandomIntegerGenerator(0, 9);
getRandomDigit();

console.log(getRandomIntegerGenerator(-10, 10)());
