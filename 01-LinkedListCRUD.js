//Question
//Create a data structure that can replicate Linked List.
//Also add CRUD operations for this LL


//Solution : 

class LinkedList{
    constructor(data){
        this.data = data
        this.next = null
    }
}

//insertAtEnd
const insertAtEnd = (head, newNodeData) => {
    let newNode = new LinkedList(newNodeData)
    
    if(head == null){
        head = newNode
        return head
    }

    while(head.next){
        head = head.next
    }

    head.next = newNode
}

//insertAfterAParticularNode
const insertAfterANode = (newNodeData, targetNodeValue, head) => {
    let newNode = new LinkedList(newNodeData)

    if(head == null){
        head.next = newNode
        return
    }

    while(head.data != targetNodeValue){
        head = head.next
    }

    let nextNode = head.next
    head.next = newNode
    newNode.next = nextNode
}

//delete from end
const deleteFromEnd = (head) => {
    let prev = null

    if(head == null){
        return
    }

    while(head.next){
        prev = head
        head = head.next
    }

    prev.next = null
}

//delete from anywhere
const deleteFromAnywhere = (targetNodeValue, head) => {
    let prev = null

    if(head == null){
        return
    }

    while(head.data != targetNodeValue){
        prev = head
        head = head.next
    }

    let nextOfTarget = head.next
    prev.next = nextOfTarget

    return head.data
}

//Update A Value
const UpdateANode = (newNodeData, targetNodeValue, head) => {
    if(head == null){
        return
    }

    while(head.data != targetNodeValue){
        head = head.next
    }

    head.data = newNodeData
}

//Traverse a list
const traverse = (head) => {
    let res = ''
    while(head){
        res+=head.data
        head = head.next
        if(head)
            res+=' -> '
    }
    console.log(res)
}


//Inputs

let listhead = new LinkedList('HEAD')

//insert
insertAtEnd(listhead, 1)
insertAtEnd(listhead, 2)
insertAtEnd(listhead, 3)
insertAtEnd(listhead, 4)
insertAtEnd(listhead, 6)

traverse(listhead.next)

//insert after 4
console.log('Inserting in between')
insertAfterANode(5,4,listhead)

traverse(listhead.next)

//delete from end
deleteFromEnd(listhead)
console.log('Deleting at end in between')
traverse(listhead.next)

//delete anywhere
deleteFromAnywhere(1,listhead)
console.log('Deleting 1 ')
traverse(listhead.next)


