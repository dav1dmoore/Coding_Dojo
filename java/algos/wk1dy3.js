
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
