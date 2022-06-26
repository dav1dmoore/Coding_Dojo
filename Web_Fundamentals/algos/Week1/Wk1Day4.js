var x = 5;
    
function setX(newValue) {
    x = newValue; 
}
    
console.log(x);
setX(15);
console.log(x);

// Output: 5, 15

var y = 5;
    
function addToY(amount) {
    return y + amount;
    console.log("hello there");
}
    
console.log(y);
var result = addToY(-10);
console.log(result);
console.log(y);

// Output: 5,-5, 5

function isPal(arr) {
    for(var left=0; left<arr.length/2; left++) {
        var right = arr.length-1-left;
        if(arr[left] != arr[right]) {
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}
    
var result1 = isPal( [1, 1, 2, 2, 1] );
console.log(result1);
    
var result2 = isPal( [3, 2, 1, 1, 2, 3] );
console.log(result2);

//output: Not a pal-indrome!, Pal-indrome!