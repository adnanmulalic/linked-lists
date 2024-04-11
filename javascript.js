class LinkedList {
    constructor(nodeData = null, nextNode = null) {
        this.nodeData = nodeData;
        this.nextNode = nextNode;
    }

    // travelThroughList(list, newValue) {
    //     if (list.nextNode === null) {
    //         list.nextNode = new LinkedList(newValue);
    //         return
    //     }
    //     console.log(list.nodeData, newValue);
    //     this.travelThroughList(list.nextNode, newValue);

    // }

    append(value) {
        if (this.nodeData === null) {
            this.nodeData = value;
            //this.nextNode = null;
        } else {
            function travelToLastNode(node, newValue) {
                if (node.nextNode === null) {
                    node.nextNode = new LinkedList(newValue);
                    return;
                }
                travelToLastNode(node.nextNode, newValue);
        
            }
            travelToLastNode(this, value);
        }
    }

    prepend(value) {
        //let previousList = this; 
        this.nextNode = new LinkedList(this.nodeData, this.nextNode); //{...previousList}
        this.nodeData = value;
    }

    size() {
        let nodeCounter = this.nodeData === null ? 0 : 1;
        function countNodes(node) {
            if (node.nextNode === null) {
                return;
            }
            nodeCounter++;
            countNodes(node.nextNode);
        }
        countNodes(this);
        return nodeCounter;
    }

    head() {
        return new LinkedList(this.nodeData, this.nextNode);
    }

    tail() {
        let lastNode = null;
        function travelToLastNode(node) {
            if (node.nextNode === null) {
                lastNode = new LinkedList(node.nodeData)
                console.log(lastNode)
                return lastNode;
            }
            travelToLastNode(node.nextNode);
    
        }
        travelToLastNode(this);
        return lastNode;
    }

    at(index) {
        let counter = 0;
        let nodeAtGivenIndex = "No node at this index";
        function returnNodeAtGivenIndex(node) {
            if (counter === index) {
                nodeAtGivenIndex = new LinkedList(node.nodeData, node.nextNode);
                return;
            }
            counter++;
            if (node.nextNode !== null) {
                returnNodeAtGivenIndex(node.nextNode)
            }
        } 
        returnNodeAtGivenIndex(this);
        return nodeAtGivenIndex;
    }


    pop() {
        let poppedValue = null;
        if (this.nextNode === null) {
            poppedValue = this.nodeData;
            this.nodeData = null;
            return poppedValue;
        } else {
            function travelToSecondLastNode(node) {
                if (node.nextNode.nextNode === null) {
                    poppedValue = node.nextNode.nodeData;
                    node.nextNode = null;
                    return poppedValue;
                }
                travelToSecondLastNode(node.nextNode);
            }
            travelToSecondLastNode(this)
            return poppedValue;
        }
    }

    contains(value) {
        let isValueInList = false;
        function findMatchingValue(node) {
            if (node.nodeData === value) {
                isValueInList = true;
                return;
            }
            node.nextNode !== null && findMatchingValue(node.nextNode);
        }
        findMatchingValue(this);
        return isValueInList;
    }

    find(value) {
        let indexOfNode = null;
        let counter = 0;
        function findIndexOfValue(node) {
            if (node.nodeData === value) {
                indexOfNode = counter;
                return;
            }
            counter++;
            node.nextNode !== null && findIndexOfValue(node.nextNode);
        }
        findIndexOfValue(this);
        return indexOfNode;
    }
}

let testList = {
    nodeData : 1,
    nextNode : {
        nodeData: 2,
        nextNode: {
            nodeData: 3,
            nextNode: {
                nodeData: 4,
                nextNode: null
            }
        }
    }
}