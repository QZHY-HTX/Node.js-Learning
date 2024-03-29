class Node{
    constructor(data,next){
        this.data = data;
        this.next = next;
    }
}
var head;
// 初始化循环链表
function initial(){
    head = new Node(null,null);
    head.next = head;
}
// 插入
function headInsert(element){
    var node = new Node(element,null);
    head.next = node;
    node.next = head;
}