
function reverse(arr){
let arrNew = [];
for(let i = arr.length-1; i>=0; i--){
    arrNew.push(arr[i]);
}
console.log(arrNew);
return arrNew;
}

reverse(["a", "b", "c", "d", "e"]);

function reverseEasy(arr){
    arr.reverse();
    console.log(arr);
    return arr
}

reverseEasy(["a", "b", "c", "d", "e"]);

//Output: e,d,c,b,a

var start = 0;
var end = 12;
    
while(start < end) {
    console.log("start: " + start + ", end: " + end);
    start += 2;
    end -= 2;
}

var fruit1 = "apples";
var fruit2 = "oranges";
    
var temp = fruit1; // temp is a common name for this
fruit1 = fruit2;
fruit2 = temp;
    
console.log(fruit2 + " and " + fruit1);

