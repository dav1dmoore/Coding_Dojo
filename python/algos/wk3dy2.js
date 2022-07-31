function binarySearch(arr, num){
    let half = Math.floor(arr.length/2)
    let result = false;
    let count = 0;
    if(arr[half] > num){
        for(let i = half; i >= 0; i--){
            if(arr[i] == num){
                result = true;
                count++
            }
        }
    }

    if(arr[half] < num){
        for(let i = half; i < arr.length; i++){
            if(arr[i] == num){
                result = true;
                count++
            }
        }
    }
    if(count == 0){
        return result
    }
    console.log(`Result: ${result} and Count: ${count}`)
    return count
}

binarySearch([2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9], 2)