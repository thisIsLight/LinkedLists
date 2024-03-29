//Question
//You are given a linked list and you have to find if it is a circular linked list


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

    let data = head.data

    let res = ''
    while(head){
        if(head.data == data){
            console.log('Circle Detected')
            break
        }
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
let last = insertAtEnd(listhead, 6)

last.next = listhead.next

traverse(listhead.next)