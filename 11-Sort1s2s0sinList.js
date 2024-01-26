//Question
//You are given a linked list with values 1, 2, and 0. You have to sort this list


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

//sort 1's 2's and 0's
const sort120s = (head) => {
    let start = head
    let map = new Map()

    while(head){
        if(map.has(head.data)){
            map.set(head.data, map.get(head.data)+1)
        }
        else{
            map.set(head.data, 1)
        }
        head = head.next
    }

    let zero = map.get(0)
    for(let i=0;i<zero;i++){
        start.data = 0
        start = start.next
    }
    let one = map.get(1)
    for(let i=0;i<one;i++){
        start.data = 1
        start = start.next
    }
    let two = map.get(2)
    for(let i=0;i<two;i++){
        start.data = 2
        start = start.next
    }

}


//Inputs

let listhead = new LinkedList('HEAD')

//insert
insertAtEnd(listhead, 0)
insertAtEnd(listhead, 2)
insertAtEnd(listhead, 1)
insertAtEnd(listhead, 0)
insertAtEnd(listhead, 2)

traverse(listhead.next)
sort120s(listhead.next)

traverse(listhead.next)