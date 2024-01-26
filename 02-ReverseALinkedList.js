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
    if(!head.next){
        head.next = prev
        return head
    }

    let lasthead = head
    head = reverseLLRecursion(head.next, head)
    lasthead.next = prev
    return head
}

const reverseSimple = (head) => {
    if(head == null || head.next == null){
        return head
    }

    let next = head.next
    let prev = null
    while(head){
        next = head.next
        head.next = prev
        prev = head
        head = next
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

console.log('original List : ')
traverse(listhead.next)

listhead.next = reverseLLRecursion(listhead.next, null)
traverse(listhead.next)

traverse(reverseSimple(listhead.next))