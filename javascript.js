class ListNode {
    constructor(nodeData = null, nextNode = null) {
        this.nodeData = nodeData;
        this.nextNode = nextNode;
    }

}

class LinkedList {
    constructor() {
        this.nodeHead = null;
    }

    append(value) {
        if (this.nodeHead === null) {
            this.nodeHead = new ListNode(value);
        } else {
            function travelToLastNode(node, newValue) {
                if (node.nextNode === null) {
                    node.nextNode = new ListNode(newValue);
                    return;
                }
                travelToLastNode(node.nextNode, newValue);
        
            }
            travelToLastNode(this.nodeHead, value);
        }
    }

    prepend(value) {
        if (this.nodeHead === null) {
            this.nodeHead = new ListNode(value);
        } else {
            this.nodeHead.nextNode = new ListNode(this.nodeHead.nodeData, this.nodeHead.nextNode);
            this.nodeHead.nodeData = value;
        }
    }

    size() {
        let nodeCounter = this.nodeHead === null ? 0 : 1;
        function countNodes(node) {
            if (node.nextNode === null) {
                return;
            }
            nodeCounter++;
            countNodes(node.nextNode);
        }
        if (this.nodeHead) {
            countNodes(this.nodeHead);
            return nodeCounter;
        } else {
            return nodeCounter;
        }
    }

    head() {
        return this.nodeHead;
    }

    tail() {
        let lastNode = null;
        function travelToLastNode(node) {
            if (node.nextNode === null) {
                lastNode = new ListNode(node.nodeData);
                return;
            }
            travelToLastNode(node.nextNode);
    
        }
        travelToLastNode(this.nodeHead);
        return lastNode;
    }

    at(index) {
        let counter = 0;
        let nodeAtGivenIndex = "No node at this index";
        function returnNodeAtGivenIndex(node) {
            if (counter === index) {
                nodeAtGivenIndex = node;
                return;
            }
            counter++;
            if (node.nextNode !== null) {
                returnNodeAtGivenIndex(node.nextNode)
            }
        } 
        returnNodeAtGivenIndex(this.nodeHead);
        return nodeAtGivenIndex;
    }


    pop() {
        if (this.nodeHead.nextNode === null) {
            this.nodeHead = null;
        } else {
            function travelToSecondLastNode(node) {
                if (node.nextNode.nextNode === null) {
                    node.nextNode = null;
                    return; 
                }
                travelToSecondLastNode(node.nextNode);
            }
            travelToSecondLastNode(this.nodeHead);
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
        findMatchingValue(this.nodeHead);
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
        findIndexOfValue(this.nodeHead);
        return indexOfNode;
    }

    toString() {
        let listInString = "";
        function travelToLastNode(node) {
            if (node.nextNode === null) {
                listInString += `( ${node.nodeData} ) -> null`;
                return;
            }
            listInString += `( ${node.nodeData} ) -> `;
            travelToLastNode(node.nextNode);
        }
        if (this.nodeHead === null) {
            return "List is empty.";
        } else {
            travelToLastNode(this.nodeHead);
            return listInString;
        }
    }

    insertAt(value, index) {
        function insertNodeAtGivenIndex(node, counter = 0) {
            if (counter === index) {
                node.nextNode = new ListNode(node.nodeData, node.nextNode);
                node.nodeData = value;
                return;
            }
            if (node.nextNode !== null) {
                insertNodeAtGivenIndex(node.nextNode, counter + 1);
            } else {
                console.log("Index not available. Use append to add node to the end of the list.");
            }  

        }
        if (this.nodeHead === null) {
            this.nodeHead = new ListNode(value);
        } else {
            insertNodeAtGivenIndex(this.nodeHead);
        } 
    }

    removeAt(index) {
        function removeNodeAtGivenIndex(node, counter = 0) {
            if (counter === index) {
                node.nodeData = node.nextNode.nodeData;
                node.nextNode = node.nextNode.nextNode;
                return;
            } else if (node.nextNode.nextNode === null) {
                node.nextNode = null;
                return;
            }
            if (node.nextNode !== null) {
                removeNodeAtGivenIndex(node.nextNode, counter + 1);
            } else {
                console.log("Index not available.");
            }
        }
        if (this.nodeHead === null) {
            return "List is empty.";
        } else if (this.nodeHead.nextNode === null && index === 0) {
            this.nodeHead = null;
        } else if (this.nodeHead.nextNode === null && index !== 0) {
            return "Index not available";
        }
         else {
            removeNodeAtGivenIndex(this.nodeHead);
        }
    }
}