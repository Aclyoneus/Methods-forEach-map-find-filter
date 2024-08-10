// 1

// function getDeltaFunction(numbersObject) {
//     let a = numbersObject.a;
//     let b = numbersObject.b;
//     let c = numbersObject.c;
//
//     function getDelta(newNumbersObject) {
//         if (newNumbersObject.a !== undefined) {
//             a = newNumbersObject.a;
//         }
//         if (newNumbersObject.b !== undefined) {
//             b = newNumbersObject.b;
//         }
//         if (newNumbersObject.c !== undefined) {
//             c = newNumbersObject.c;
//         }
//         return deltaFunction = (b * b) - 4 * a * c;
//     }
//     return getDelta;
// }
//
// const getDelta = getDeltaFunction({ a: 1, b: 2, c: 3 });
// console.log(getDelta()); // -8
// console.log(getDelta({ b: 12 })); // 132
// console.log(getDelta({ a: 4, b: 10 })); // 52
// console.log(getDelta({ a: 4, b: 0 })); // -48
//
// // The nested function returns NaN if any of the arguments are missing
// console.log(getDeltaFunction({ a: 1, c: 3 })()); // NaN
// console.log(getDeltaFunction({ a: 1, c: 3 })({ b: 15 })); // 213

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
    let sheepSum = 0;
    sheepArray.filter(function(isSheepPresent) {
        if (isSheepPresent === true) {
            sheepSum = sheepSum + 1;
        }
    })
    return sheepSum;
}

console.log(countSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]));
