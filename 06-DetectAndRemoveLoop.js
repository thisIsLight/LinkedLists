//Question
//You are given a linked list and you have to detect if there is a loop in it and after that you have to remove that loop


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

//detact and remove loop
const detectLoopAndRemoveit = (head) => {
    let slow = head.next
    let fast = head.next.next
    let originalhead = head

    while(slow.data != fast.data){
        slow = slow.next
        fast = fast.next.next
    }
    while(originalhead.data != fast.data){
        fast = fast.next
        originalhead = originalhead.next
        // console.log(fast.data, originalhead.data)
    }

    console.log('loop detected at ', slow.data)
    let data = slow.data
    slow = slow.next
    while(slow.next.data != data){
        slow = slow.next
    }

    slow.next = null

}


//Inputs

let listhead = new LinkedList('HEAD')

//insert
insertAtEnd(listhead, 1)
insertAtEnd(listhead, 2)
insertAtEnd(listhead, 3)
let thirdlast = insertAtEnd(listhead, 4)
insertAtEnd(listhead, 5)
let last = insertAtEnd(listhead, 6)

last.next = thirdlast

console.log(listhead.next.next.next.next)

detectLoopAndRemoveit(listhead.next)

traverse(listhead.next)