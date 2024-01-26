//Question
//You are given a linked list and you have to reverse it


//Solution

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

//reverse through recursion
const reverseLLRecursion = (head, prev) => {

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