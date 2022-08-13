class BSTNode{
    constructor( data ){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

isEmpty(){
    if (this.root == null){
        return true;
    }
    return false;
}

insert(newVal){
    if (this.isEmpty()){
        this.root = new BSTNode(newVal);
        return;
    }
    let runner = this.root;
    while (runner != null){
        if (newVal >= runner.data){
            if (runner.right == null){
                runner.right = new BSTNode(newVal);
                return;
            }
            runner = runner.right;
        } else{
            if (runner.left == null){
                runner.left = new BSTNode(newVal);
                return;
            }
            runner = runner.left;
        }
    }
}

min(current = this.root){
    while(current.left != null){
        current = current.left;
    }
    return current.data;
}

minRecursive(current = this.root) {
    if(current){
        return null
    }
    if(current.left != null){
        return this.minRecursive(current.left)
    }
    return current.data
}

contains( searchVal ){
    if( this.isEmpty() ){
        return false;
    }

    let runner = this.root;
    while( runner ){
        if( runner.data === searchVal ){
            return true;
        }

        if( searchVal > runner.data ){
            runner = runner.right;
        } else {
            runner = runner.left;
        }
    }

    return false;

}

containsRecursive(searchVal, current = this.root) {
    if( ! current ){
        return false;
    }

    if( searchVal === current.data ){
        return true;
    }

    if( searchVal > current.data ){
        return this.containsRecursive( searchVal, current.right );
    } else {
        return this.containsRecursive( searchVal, current.left );
    }
}


}