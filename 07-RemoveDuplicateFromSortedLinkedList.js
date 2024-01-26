//Question
//You are given a sorted linked list with duplicate values. You need to remove duplicates from the list 


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
const removeduplicateinsortedList = (head) => {
    let prevvalue = -1
    while(head){
        let cur = head
        if(prevvalue == head.data){
            while(prevvalue == head.data){
                prevvalue = head.data
                head = head.next
            }
            cur.next = head
        }
        else{
            head = head.next 
            if(head){
                prevvalue = head.data
            }  
        }
    }
}


//Inputs

let listhead = new LinkedList('HEAD')

//insert
insertAtEnd(listhead, 1)
insertAtEnd(listhead, 2)
insertAtEnd(listhead, 2)
insertAtEnd(listhead, 3)
insertAtEnd(listhead, 4)
insertAtEnd(listhead, 4)
insertAtEnd(listhead, 5)

traverse(listhead.next)

removeduplicateinsortedList(listhead.next)

traverse(listhead.next)



