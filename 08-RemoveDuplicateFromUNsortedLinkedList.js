//Question
//You are given an unsorted linked list with duplicate values. You need to remove duplicates from the list 


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

//remove duplicates
const removeduplicateinunsortedList = (head) => {
    let map = new Map()
    let prev = null
    while(head){
        if(map.has(head.data)){
            prev.next = head.next
            head = head.next
        }
        else{
            map.set(head.data, 1)
            prev = head
            head = head.next
        }
    }
}


//Inputs

let listhead = new LinkedList('HEAD')

//insert
insertAtEnd(listhead, 1)
insertAtEnd(listhead, 4)
insertAtEnd(listhead, 2)
insertAtEnd(listhead, 3)
insertAtEnd(listhead, 4)
insertAtEnd(listhead, 5)
insertAtEnd(listhead, 2)

traverse(listhead.next)

removeduplicateinunsortedList(listhead.next)

traverse(listhead.next)



