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


}