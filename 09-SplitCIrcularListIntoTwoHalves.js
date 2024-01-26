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
    return newNode
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

//split circular linked list
const splitintoTwo = (head) => {
    let slow = head.next
    let fast = head.next.next
    let firstval = head.data
    let prev = head

    while(fast.data != firstval){
        prev = slow
        slow = slow.next
        fast = fast.next
        if(fast.next.data == firstval){
            break
        }
        fast = fast.next
        if(fast.next.data == firstval){
            break
        }
    }

    prev.next =null
    fast.next =null

    traverse(head)
    traverse(slow)
}


//Inputs

let listhead = new LinkedList('HEAD')

//insert
insertAtEnd(listhead, 1)
insertAtEnd(listhead, 2)
insertAtEnd(listhead, 3)
insertAtEnd(listhead, 4)
insertAtEnd(listhead, 5)
let last = insertAtEnd(listhead, 6)

last.next = listhead.next

// traverse(listhead.next)

splitintoTwo(listhead.next)