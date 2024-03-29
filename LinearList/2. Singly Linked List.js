/**
 * 构造结点
 */
class Node{
    constructor(data,next){
        this.data = data;
        this.next = next;
    }
}

var head, node;
var length = 0;

/**
 * 初始化，包含头结点和下一结点
 * @param {初始结点的元素} element 
 * @returns 
 */
function initialSinglyLinkedList(element){
    head = new Node(null,null);
    node = new Node(element,null);
    head.next = node;
    length = 1;
    return "init successfully";
}

// 头插法
function headInsert(element){
    var newNode = new Node(element,null);
    newNode.next = head.next;
    head.next = newNode;
    length++;
    return "head insert successfully";
}

// 尾插法

// 按位删除结点
function deleteNode(index){
    if(index<1||index>length){
        return "index error";
    }
    var indexNode = head;
    for(var i =0;i<index-1;i++){
        indexNode = indexNode.next;
    }
    indexNode.next = indexNode.next.next;
    return "delete successfully";
}

// 输出链表
function printSinglyLinkedList(){
    var indexNode = head;
    while(indexNode.next!=null){
        console.log(indexNode.data);
        indexNode = indexNode.next;
    }
    console.log(indexNode.data);
}

console.log(initialSinglyLinkedList(1));
printSinglyLinkedList();
console.log(headInsert(2));
console.log(headInsert(3));
printSinglyLinkedList();
console.log(deleteNode(2));
printSinglyLinkedList();