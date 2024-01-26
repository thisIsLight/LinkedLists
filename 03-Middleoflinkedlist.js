//Question
//You are given a linked list and you have to find the middles element in that list


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

//`find mid elelents`
const middleOfList = (head) => {
    
    let fast = head
    let slow = head

    while(fast != null && slow != null){
        fast = fast.next

        if(fast != null){
            fast = fast.next
        }
        else{
            break
        }
        slow = slow.next
    }

    console.log(slow.data)
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

middleOfList(listhead.next)