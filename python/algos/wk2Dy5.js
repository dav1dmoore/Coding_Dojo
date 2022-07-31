// The longest Palindrome

function longestPalindrome(input){
    let front = '';
    let back = '';
    let longest;
    if(input.length < 2){
        return input[0]
    } else {
            for(var i = 0; i < input.length; i++){
                front += (input[i])
                back = ''
                // console.log(front)

                for(let j = input.length-1; j > i; j--){
                    back += input[j];
                    // console.log(back)
                    if(front == back){
                        console.log(true)
                    }
                }
            }
    }
}

longestPalindrome('The racecar exploded unexpectedly, noooo!')
