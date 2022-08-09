
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
        // * Calls insertAtBack on each item of the given array.
        // * - Time: O(n * m) n = list length, m = arr.length.
        // * - Space: O(1) constant.
        // * @param {Array<any>} vals The data for each new node.
        // * @returns {SinglyLinkedList} This list.
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

}


class Node{
    constructor(valueInput){
        this.value = valueInput;
        this.next = null;
    }
}

// let chipotleLine = new SLL();
// console.log(chipotleLine.isEmpty());
// chipotleLine.display();
// chipotleLine.insertAtBack('David');
// chipotleLine.insertAtBack('Coren');
// chipotleLine.insertAtBack('Caleb');
// chipotleLine.display();

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

// /**
//  * Retrieves the data of the second to last node in this list.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @returns {any} The data of the second to last node or null if there is no
//  *    second to last node.
//  */
//  secondToLast() {}

//  /**
//   * Removes the node that has the matching given val as it's data.
//   * - Time: O(?).
//   * - Space: O(?).
//   * @param {any} val The value to compare to the node's data to find the
//   *    node to be removed.
//   * @returns {boolean} Indicates if a node was removed or not.
//   */
//  removeVal(val) {}

