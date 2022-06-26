// Print Odds 1-20
for(let i = 1; i <= 20; i++){
    if(i%2 == 1){
        console.log(i)
    }
}

// Decreasing multiples of 3

for(let i = 100; i >= 0; i--){
    if(i%3 == 0){
        console.log(i);
    }
}

//Print the sequence

var arr = [4,2.5,1,-.5,-2,-3.5]
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
    if(i < arr.length - 1){
        console.log(arr[i] - arr[i+1]);
    }
}

// Sigma
var count = 0;
for(let i = 1; i <= 100; i++){
    count+=i;
}
console.log(count)

// Factorial

var factorial = 1;
for(let i = 1; i<=12; i++){
        factorial *= i ;
}
console.log(factorial);