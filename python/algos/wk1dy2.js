function balance(arr){
    let countLeft = 0
    let countRight = 0
    for(var i = 0; i< arr.length; i++){
        if(arr[i-1] == undefined){
            continue
        } else {
            countLeft += arr[i-1]
            countRight = 0;
            for(var j = arr.length - 1; j > i; j--){
                countRight += arr[j]
            }
            if(countLeft == countRight){
                console.log(`Balance point is index: ${i}`)
                return `Balance point is index: ${i}`
            } else if((i == arr.length-1) && (countLeft != countRight)){
                console.log(-1)
                return -1
            }
        }
    }
}

balance([3, 4, 9, 2, 4, -2, 3]);
balance([1,2,3])
balance([9,-2,7,3,4,2,3,5])
