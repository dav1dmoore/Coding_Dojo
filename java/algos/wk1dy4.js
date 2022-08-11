
class SLL {
    constructor(){
        this.head = null;
    }

    isEmpty(){
        if(this.head == null){
            return true;
        } return false;
    }

    inserAtFront(valueInput){
        let item = new Node(valueInput);
        item.next = this.head;
        this.head = item;
        }

    insertAtBack(valueInput){
        let item = new Node(valueInput);
        if(this.isEmpty()){
            this.head = item;
        } else {
            let nextItem = this.head;
            while(nextItem.next != null){ nextItem = nextItem.next}
            nextItem.next = item;
        }
    }

    removeFromBack(){
        if(this.isEmpty()){
            return "SLL is empty!"
        } else {
            let runner = this.head;
            while(runner.next){
                let nextItem = runner.next;
                if(nextItem.next == null){
                    runner.next = null;
                    break;
                }
                runner = runner.next;
            }
        }
    }

    removeFromFront(valueInput){
        if(!this.isEmpty()){
            this.head = this.head.next;
        } return;
    }


    display(){
        if (this.isEmpty()){
            console.log('This list is empty');
        } else {
            let runner = this.head;
            console.log('This node: ' + runner.value);
            while(runner.next){
                runner = runner.next;
                console.log('This node: ' + runner.value)
            }
        }
    }

    seedFromArray(arr){
        this.head = null
        for(let item of arr){
            this.insertAtBack(item);
        }
        return 
    }

    toArray(){
        let arr = [];
        if(this.isEmpty()){
            return arr;
        } else {
            let runner = this.head;
            while(runner.next){
                arr.push(runner.value);
                runner = runner.next;
            }
            arr.push(runner.value);
            return arr;
        }
    }

    insertAtBackRecursive(data, runner = this.head){
        if(runner == null){
            runner = new Node(data);
            return runner;
        } else if(runner.next == null){
            let node = new Node(data);
            runner.next = node;
            return node;
        }
        this.insertAtBackRecursive(data, runner.next)
    }

    contains(val){
        if(this.isEmpty()){
            return "SSL is empty!"
        } else {
            let runner = this.head;
            while (runner.next){
                if(runner.value == val){
                    console.log('true')
                    return true;
                }
                runner = runner.next
            }
        console.log('false')
        return false;
        }
    }

    removeVal(val){
        if(this.isEmpty()){
            return "SSL is empty!"
        } else {
            let runner = this.head;
            while (runner.next){
                let runnerNxt = runner.next;
                if(runnerNxt.value == val){
                    console.log('true')
                    let placeHolder = runner;
                    let nextItem = runner.next;
                    let connector = nextItem.next;
                    placeHolder.next = connector;
                    return true;
                }
                runner = runner.next
            }
        console.log('false')
        return false;
        }
    }

    containsRecursive(data, runner = this.head){
        if(runner == null){
            return false;
        }
        if(runner.value == data){
            return true;
        }
        return this.containsRecursive(data, runner.next)
    }

    prepend(value, target){
        let newNode = new Node(value)
        
        if(this.isEmpty()){
            return false;
        }
        else if(this.head.data == target){
            newNode.next = this.head;
            this.head = newNode;
            return true;
        }

        let runner = this.head;
        while(runner.next != null){
            if(runner.next.data == target){
                newNode.next = runner.next;
                runner.next = newNode;
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    moveMinToFront(){
        if(this.isEmpty() || this.head.next == null){
          return this;
        }
        let minNodePrev = this.head;
        let runner = this.head;
        while(runner.next != null){
          if(minNodePrev.next.data > runner.next.data){
            minNodePrev = runner;
          }
          runner = runner.next;
        }
        let minNode = new ListNode(minNodePrev.next.data);
        minNode.next = this.head; 
        this.head = minNode;
  
        minNodePrev.next = minNodePrev.next.next;
        return this
      }

      concat(valueInput){
        if(this.isEmpty()){
            this.head = valueInput;
        } else {
            let nextItem = this.head;
            while(nextItem.next != null){ nextItem = nextItem.next}
            nextItem.next = valueInput.head;
        }
        return this;
    }

    splitOnVal( val ){
        if( this.isEmpty() ){
            return null;
        }
        if( this.head.data === val){
            let returnList = new SSL();
            returnList.head = this.head;
            this.head = null;
            return returnList;
        }
        let runner = this.head;
        while( runner.next ){
            if( runner.next.data === val){
                let returnList = new SSL();
                returnList.head = runner.next;
                runner.next = null;
                return returnList;
            }
            runner = runner.next;
        }
        return null;
    }

    recursiveMax(runner = this.head, maxNode = this.head){
        if( this.isEmpty() ){
            return null;
        }
        if( ! runner ){
            return maxNode.data;
        }
        if( runner.data > maxNode.data ){
            return this.recursiveMax( runner.next, runner );
        }
        return this.recursiveMax( runner.next, maxNode );
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


class Node{
    constructor(valueInput){
        this.value = valueInput;
        this.next = null;
    }
}

let chipotleLine = new SLL();
console.log(chipotleLine.isEmpty());
chipotleLine.display();
chipotleLine.insertAtBack('David');
chipotleLine.insertAtBack('Coren');
chipotleLine.insertAtBack('Caleb');
chipotleLine.display();

let newChipotle = new SLL();
let newArr = ['david', 'tom', 'tim', 'John', 'Frank']
newChipotle.seedFromArray(newArr);
// console.log(newChipotle.containsRecursive('david'));
// newChipotle.display();
// newChipotle.removeFromBack();
// newChipotle.contains('tim');
newChipotle.display();
newChipotle.removeVal('tim');
newChipotle.display();
console.log("--------------------------------");
newChipotle.concat(chipotleLine);
newChipotle.display();

let numbers = new SLL();
let nums = ['1', '2', '5', '10', '3']
numbers.seedFromArray(nums);
numbers.recursiveMax();