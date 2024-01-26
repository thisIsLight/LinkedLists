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

//merge two sorted LL
const mergeSortedLL = (head1, head2) => {
    let start
    if(head1.data < head2.data){
        start = head1
        head1 = head1.next
    }
    else{
        start = head2
        head2 = head2.next
    }
    let reshead = start

    while(head1 && head2){
        if(head1.data < head2.data){
            start.next = head1
            head1 = head1.next
        }
        else{
            start.next = head2
            head2 = head2.next
        }
        start = start.next
    }

    if(head1){
        start.next = head1
    }

    if(head2){
        start.next = head2
    }

    traverse(reshead)
}


//Inputs

let listhead = new LinkedList('HEAD')

//insert
insertAtEnd(listhead, 1)
insertAtEnd(listhead, 3)
insertAtEnd(listhead, 6)
insertAtEnd(listhead, 20)
insertAtEnd(listhead, 40)

let listheadtwo = new LinkedList('HEAD')

//insert
insertAtEnd(listheadtwo, 2)
insertAtEnd(listheadtwo, 4)
insertAtEnd(listheadtwo, 10)
insertAtEnd(listheadtwo, 20)
insertAtEnd(listheadtwo, 60)

traverse(listhead.next)
traverse(listheadtwo.next)

mergeSortedLL(listhead.next, listheadtwo.next)