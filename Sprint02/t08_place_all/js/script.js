function sortEvenOdd(arr) {
    arr.sort(function(a, b) {
    return a % 2 - b % 2 || a - b;
    });
}


// function sortEvenOdd(arr) {
//     let k = 0;
//     let temp;
//     let n = arr.length;
//     for (let i = 0; i < n; i++) {
//         if (arr[i] % 2 == 0) {
//             temp = arr[i];
//             arr[i] = arr[k];
//             arr[k] = temp;
//             k++;
//         }     
//     }
//     for (let step = 0; step < (n / 2) - 2; ++step) {
//         for (let i = 0; i < (n/2) - step - 2; ++i) {
//           if (arr[i] > arr[i + 1]) {
//             let temp1 = arr[i];
//             arr[i] = arr[i + 1];
//             arr[i + 1] = temp1;
//           }
//         }
//       }

//       for (let step = (n / 2)-1; step < n; ++step) {
//         for (let i = (n / 2)-1; i < n; ++i) {
//           if (arr[i] > arr[i + 1]) {
//             let temp2 = arr[i];
//             arr[i] = arr[i + 1];
//             arr[i + 1] = temp2;
//           }
//         }
//       }


//     return arr;
        
// }

     


