// function bubbleSort1(arr){
//     arr.sort()
//     console.log(arr)

// }

// bubbleSort1([2,6,3,4,1,2,3,1])

function bubbleSort(arr){
    let placeholder;
    let count = 0
    while(count < arr.length){
        for(let i = 0; i < arr.length; i++){
            if(arr[i+1] == undefined){
                continue
            } else if(arr[i] > arr[i+1]){
                placeholder = arr[i+1]
                arr[i+1] = arr[i]
                console.log
                arr[i] = placeholder
            }
        }
        count++
        console.log(arr)
    }
}

bubbleSort([2,6,3,4,1,2,3,1]);