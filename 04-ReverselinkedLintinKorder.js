//Question
//You are given a linked list and you have to reverse it with an order of k
//Example : [1,2,3,4,5,6]  and k = 2 => [2,1,4,3,6,5]


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

//reverse in K order
const reverseLLRecursionKOrder = (head,k) => {   
    if(head == null || head.next == null){
        return head
    }
    let oldhead = head

    let next = head.next
    let prev = null
    let count = 0
    while(head && count < k){
        next = head.next
        head.next = prev
        prev = head
        head = next
        count++
    }

    oldhead.next = reverseLLRecursionKOrder(head,k)
    return prev
}

//reverse a LL
const reverseSimple = (head,k) => {
    if(head == null || head.next == null){
        return head
    }

    let next = head.next
    let prev = null
    let count = 0
    while(head && count < k){
        next = head.next
        head.next = prev
        prev = head
        head = next
        count++
    }
    return prev
}


//Inputs

let listhead = new LinkedList('HEAD')

//insert
insertAtEnd(listhead, 1)
insertAtEnd(listhead, 2)
insertAtEnd(listhead, 3)
insertAtEnd(listhead, 4)
insertAtEnd(listhead, 5)
insertAtEnd(listhead, 6)

traverse(listhead.next)

listhead.next = reverseLLRecursionKOrder(listhead.next, 2)

traverse(listhead.next)
