var arr2d = [ [2, 5, 8],
              [3, 6, 1],
              [5, 7, 7] ];

function isPresent2d(arr, val){
    for(let each of arr){
        for(let i = 0; i < each.length; i++){
            if(each[i] == val){
                console.log(true);
            }
        }
    }
}

isPresent2d(arr2d, 5);

function flatten(arr2d) {
    var flat = [];
    for(let each of arr2d){
        flat.push(...each)
    }
    return flat;
}

var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result)

let max_num = Number.NEGATIVE_INFINITY;
console.log(max_num);