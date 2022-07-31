function interleave(a, b){
    newArr = [];
        if(a.length > b.length || a.length == b.length){
            for(let i = 0; i < a.length; i++){
                if(b[i] == undefined && a[i] != undefined){
                    newArr.push(a[i])
                } else {
                    newArr.push(a[i])
                    newArr.push(b[i])
                    console.log(newArr)
                }
            }
        }

        if(b.length > a.length){
            for(let i = 0; i < b.length; i++){
                if(a[i] == undefined && b[i] != undefined){
                    newArr.push(b[i])
                } else {
                    newArr.push(a[i])
                    newArr.push(b[i])
                    console.log(newArr)
                }
            }
        }
    console.log(newArr)
    return newArr
}

interleave([1,3,5,7,9], [2,4,6,8,10]);