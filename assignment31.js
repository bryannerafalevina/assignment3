function isArithmeticProgression(numbers) {
    let selisih = numbers[1]-numbers[0]

    for(let i = 2; i < numbers.length; i++) {
        if (numbers[i] - numbers[i-1] !== selisih){
            return false
        }
    }
    return true
}

// function isArithmeticProgression(numbers) {
//     let result = true

//     for(let i = 0; i < numbers.length - 1; i++) {
//         if (numbers[i+1] - numbers[i] === numbers[0]){
//             result = true
//         } else {
//             result = false
//         }
//         if ( !result) {
//             break;
//         }
//     }
//     return result
// }

console.log(isArithmeticProgression([1, 2, 3, 4, 5, 6]));
console.log(isArithmeticProgression([2, 4, 6, 12, 24]));
console.log(isArithmeticProgression([2, 4, 6, 8]));
console.log(isArithmeticProgression([2, 6, 18, 54]));
console.log(isArithmeticProgression([1, 2, 3, 4, 7, 9]));