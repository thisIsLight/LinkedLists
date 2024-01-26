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

//check palindrome
const isPalindrome = (head) => {
    
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

    slow = slow.next
    let revereselist = reverseLLRecursion(slow,null)

    while(revereselist){
        if(head.data != revereselist.data){
            console.log('Not a palindrome')
            return
        }
        head = head.next
        revereselist = revereselist.next
    }

    console.log('Is a palindrome')
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


//Inputs

let listhead = new LinkedList('HEAD')

//insert
insertAtEnd(listhead, 1)
insertAtEnd(listhead, 2)
insertAtEnd(listhead, 3)
insertAtEnd(listhead, 2)
insertAtEnd(listhead, 1)

traverse(listhead.next)

isPalindrome(listhead.next)