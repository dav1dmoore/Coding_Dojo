display() {
    var printLines = this.displayArray();
    for (let i = 0; i < printLines.length; i++){
        console.log(printLines[i]);
    }
}

displayArray(runner = this.root){
    if (this.isEmpty()){
        return [];
    }
    var rightLines = [];
    var leftLines = [];
    // recursion: create arrays for left and right branches
    if (runner.right != null) {
        var rightLines = this.displayArray(runner.right);
    }
    if (runner.left != null) {
        var leftLines = this.displayArray(runner.left);
    }

    // convert runner.data to string, and create blank string of same length
    var dataToString = String(runner.data);
    var dataToSpaces = "";
    for (let i = 0; i < dataToString.length; i++){
        dataToSpaces += " ";
    }

    // if there is nothing to the right, add runner.data to outputArray
    let outputArray = [];
    if (runner.right == null){
        outputArray.push(dataToString);
    }
    
    // set prefix for printing rightLines
    var prefix;
    if (runner.right != null){
        if(runner.left == null) { 
            prefix = " "; 
        } else {
            prefix = "|";
        }
    }
    
    // add rightLines to outputArray
    for (let i = 0; i < rightLines.length; i++){
        if(i == 0){
            outputArray.push(dataToString + "-" + rightLines[0]);
        } else {
            outputArray.push(prefix + dataToSpaces + rightLines[i]);
        }
    }
    // add leftLines to outputArray
    for (let i = 0; i < leftLines.length; i++){
        if(i == 0){
            outputArray.push("\u2514" + leftLines[0]);
        } else {
            outputArray.push(" " + leftLines[i]);
        }
    }

    return outputArray;
} 