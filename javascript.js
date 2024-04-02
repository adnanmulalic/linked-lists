class LinkedList {
    constructor(nodeData = null, nextNode = null) {
        this.nodeData = nodeData;
        this.nextNode = nextNode;
    }

    travelThroughList(list, newValue) {
        if (list.nextNode === null) {
            list.nextNode = new LinkedList(newValue);
            return
        }
        console.log(list.nodeData, newValue);
        this.travelThroughList(list.nextNode, newValue);

    }

    append(value) {
        if (this.nodeData === null) {
            this.nodeData = value;
            this.nextNode = null;
        } else {
            this.travelThroughList(this, value);
        }
    }

    pop() {
        
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