function rotateArray(arr, shiftBy){
    if(arr == 0 || shiftBy == 0){
        return arr
    }
    var count = 0;
    if(shiftBy < 0){
        count = shiftBy;
        while(count < 0){
            arr.push(arr[0]);
            arr.shift();
            count++
        }
    } else {
        while(count < shiftBy){
            arr.unshift(arr[arr.length-1]);
            arr.pop();
            count++;
        }
    }
    console.log(arr);
    return arr
}

rotateArray([1,2,3,4,5,6,7], -2);
rotateArray([1,2,3,4,5,6,7], 2);