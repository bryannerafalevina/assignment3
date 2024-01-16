// function arrSum(arr) {

// }

// arrSum([-2,-3,4,-1,-2,1,5,-3])

function arrSum(arr) {
    let size = arr.length;
    let maxSoFar = arr[0];
    let maxEndingHere = arr[0];
    let start = 0;
    let end = 0;
    let s = 0;
   
    for (let i = 1; i < size; i++) {
       maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
   
       if (maxSoFar < maxEndingHere) {
         maxSoFar = maxEndingHere;
         start = s;
         end = i;
       }
   
       if (maxEndingHere < 0) {
         maxEndingHere = 0;
         s = i + 1;
       }
    }
   
    return [arr.slice(start, end + 1), maxSoFar];
   }
   
   let arr = [-2, -3, 4, -1, -2, 1, 5, -3];
   let result = arrSum(arr);
   console.log(result);