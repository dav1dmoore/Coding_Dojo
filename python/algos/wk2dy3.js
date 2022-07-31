function bookIndex(pages){
    let start = pages[0];
    let newArr = []
    let end;
    for(let i = 1; i < pages.length; i++){
        if(pages[i] == (pages[i-1]+1)){
            console.log(pages[i], 'consecutive')
        } else {
            end  = pages[i-1]
            newArr.push(`${start} - ${end}`)
            if(pages[i]+1 != pages[i+1]){
                newArr.push(`${pages[i]}`)
                i++
            }
            start = pages[i]
        }
    }
    console.log(newArr)
    

    // Write your solution here!
}

bookIndex([1,2,3,6,7,9,11,12,13,17]);