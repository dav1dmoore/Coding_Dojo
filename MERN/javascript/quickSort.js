// let arr = [9, 3, 8, 6, 4, 2, 5, 1, 10, 7];

// function quickSort(arr=[], left = 0, right = arr.length-1){

//     const middle = Math.floor((left+right)/2);
//     const pivot = arr[middle];
//     while()
//     // for(let i = left; i < Math.floor(arr.lenght/2); i++){
//     //     if(arr[i] > arr[Math.floor(arr.lenght/2)]){
//     //         while(j = arr.length; j > pivot; j--){
//     //             if(arr[j] < arr[pivot]){
//     //                 let temp = arr [j];
//     //                 arr[j] = arr[i];
//     //                 arr[i] = temp;
//     //                 console.log(arr)
//     //             }

//     //         }
//     //     }
//     //     if(i == j){
//     //         quickSort(arr, pivot-1);
//     //     }
//     // }
// }

// quickSort(arr, Math.floor(arr.length/2));

// -----Object Freeze -----//
const groceryList = Object.freeze([
    { "item": "carrots",           "haveIngredient": false, "price": 100 },
    { "item": "onions",            "haveIngredient": true, "price": 120  },
    { "item": "celery",            "haveIngredient": false, "price": 90 },
    { "item": "cremini mushrooms", "haveIngredient": false, "price": 500 },
    { "item": "butter",            "haveIngredient": true, "price": 11  }
]);

const item = groceryList.filter((item) => item.price < 100);
console.log(item);

