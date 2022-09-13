    function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

var headsCount = 0;
var attempts = 0;
function fiveHeadsSync() {
        while(headsCount < 5) {
            attempts++;
            let result = tossCoin();
            if(result === "heads") {
                headsCount++;
            } else {
                headsCount = 0;
            }
        }
        return true;
    }


    function fiveHeads() {
        return new Promise( (resolve, reject) => {
            if(headsCount == 5) {
                resolve(`It took ${attempts} tries to flip five "heads"`);
            } else if(attempts > 10) {
                reject("Its flipped over 100 times, stop wasting time!");
            }
        });
    }
    fiveHeads()
        .then( res => console.log(res) )
        .catch( err => console.log(err) );
    console.log( "When does this run now?" );


    