function ana(str1, str2){
    let strg1 = str1.toLowerCase().replaceAll(' ', '')
    let strg2 = str2.toLowerCase().replaceAll(' ', '')
    let strObj1 = {}
    let strObj2 = {};
    let isAnagram = false;

    if(strg1.length != strg2.length){
        console.log('Not an Anagram!')
        return false
    } else {
        for(let letter of strg1){
            strObj1[letter] = letter;
        }
        for(let letter2 of strg2){
            if(letter2 in strObj1){
                isAnagram = true;
            } else {
                isAnagram = false;
                console.log('Not an Anagram!')
                return false
            }
        }

        for(let letter3 of strg2){
            strObj2[letter3] = letter3;
        }
        for(let letter4 of strg1){
            if(letter4 in strObj2){
                isAnagram = true;
            } else {
                isAnagram = false;
                console.log('Not an Anagram!')
                return false
            }
        }
    }
    console.log('These are Anagrams!');
    return true
}

ana('Silen ttt', 'LiS Tt');