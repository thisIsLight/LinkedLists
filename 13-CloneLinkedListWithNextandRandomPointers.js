// //Question
// //You are given a linked list and you have to reverse it


// //Solution

// class LinkedList{
//     constructor(data){
//         this.data = data
//         this.next = null
//         this.random = null
//     }
// }

// //insertAtEnd
// const insertAtEnd = (head, newNodeData) => {
//     let newNode = new LinkedList(newNodeData)
    
//     if(head == null){
//         head = newNode
//         return head
//     }

//     while(head.next){
//         head = head.next
//     }

//     head.next = newNode
//     return newNode
// }

// //Traverse a list
// const traverse = (head) => {
//     let res = ''
//     while(head){
//         res+=head.data
//         head = head.next
//         if(head)
//             res+=' -> '
//     }
//     console.log(res)
// }

// //Traverse random pointer list
// const traverseRandom = (head) => {
//     let res = ''
//     while(head){
//         res+=head.random.data
//         head = head.next
//         if(head)
//             res+=' -> '
//     }
//     console.log(res)
// }

// //reverse through recursion
// const cloneList = (head, clone) => {
//     let cloneHead = clone
//     let headList = head
//     while(headList){
//         insertAtEnd(cloneHead, headList.data)
//         headList = headList.next
//     }
    
//     cloneHead = clone.next
//     headList = head

//     while(headList){
//         let nexthead = headList.next
//         let nextclone = cloneHead.next
//         headList.next = cloneHead
//         cloneHead.next = nexthead
//         headList = nexthead
//         cloneHead = nextclone
//     }
    
//     while(head){
//         let currandom = head.random
//         currandom.next.random = currandom
//         head = head.next
//     }

//     traverse(clone)
// }


// //Inputs

// let listhead = new LinkedList('HEAD')

// //insert
// let first = insertAtEnd(listhead, 1)
// let second = insertAtEnd(listhead, 2)
// let third =  insertAtEnd(listhead, 3)
// let fourth = insertAtEnd(listhead, 4)
// let fifth = insertAtEnd(listhead, 5)

// fifth.random = third
// second.random = first
// third.random = fifth
// fourth.random = second
// first.random = fourth

// traverse(listhead.next)
// traverseRandom(listhead.next)

// let cloneLinkedList = new LinkedList('HEAD COPY')
// cloneList(listhead.next,cloneLinkedList)

