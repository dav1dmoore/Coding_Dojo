// create function
function deduplicateSortedArray1(arr){
//assign variable
    let placeholder;
//create loop
    for(var i = 0; i < arr.length; i++){
//compare index to variable
        if(i == 0){
            placeholder = arr[0]
//if same, remove index
        } else if(arr[i] == placeholder){
        arr.splice(i, 1)
        i--
// if not same, assign placeholder
        } else {
            placeholder = arr[i];
        }
    }
//return arr
    console.log(arr)
    return arr
}

deduplicateSortedArray1([0, 0, 1, 2, 2, 2, 3, 3, 4, 5, 5, 5, 5, 6]);

// create function
function deduplicateSortedArray2(arr){
    //create loop
    for(var i = 0; i < arr.length; i++){
    //compare index to variable
        if(arr[i] == arr[i+1]){
            arr.splice(i,1);
            i--
        }
    //return arr
    }
    console.log(arr)
    return arr
}

    deduplicateSortedArray2([0, 0, 1, 2, 2, 2, 3, 3, 4, 5, 5, 5, 5, 6]);