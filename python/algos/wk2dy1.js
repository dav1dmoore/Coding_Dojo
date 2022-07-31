function arrayOddOccurences(arr){
    //set count variable
    let count = 0;
    //set two loops
    for(let int of arr){

        for(let i = 0; i < arr.length; i++){
            if(int == arr[i]){
                count++
            }
        }
        if(count%2 == 1){
            return int
        }
        count = 0;
    }
}

arrayOddOccurences([7,4,3,6,6,3,2,3,4,7,3]);




