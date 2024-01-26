//Question
//You are given a linked list, do merge sort on that List


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

//Split LL
const getMiddleNode = (head) => {
    let fast = head
    let slow = head

    while(!fast.next && !fast.next.next){
        slow = slow.next
        fast = fast.next.next
    }

    return slow
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

    return reshead
}

//merge sort
const MergeSortLL = (head) => {
    if(!head || !head.next){
        return head
    }

    let mid = getMiddleNode(head)
    let nexthalf = mid.next
    mid.next = null
    let firsthalf = head

    let first = MergeSortLL(firsthalf)
    let second = MergeSortLL(nexthalf)

    let mergedList = mergeSortedLL(first, second)
    return mergedList
}


//Inputs

let listhead = new LinkedList('HEAD')

//insert
insertAtEnd(listhead, 1)
insertAtEnd(listhead, 4)
insertAtEnd(listhead, 3)
insertAtEnd(listhead, 5)
insertAtEnd(listhead, 2)

traverse(listhead.next)

MergeSortLL(listhead.next)

traverse(listhead.next)

