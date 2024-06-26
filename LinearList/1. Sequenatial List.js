//顺序表
// |1|2|3|4|5|
// |0|1|2|3|4|
var SequenatialList;
var length;
function initial() {
    SequenatialList = [];
    length = 0;
    return "\x1b[0m" + "initial successfully";
}
/**
 * 
 * @param {是第几个元素} index 
 * @param {插入的值} element 
 * @returns 
 */
function push(index, element) {
    if (index < 0 || index > length + 1) {
        return "\x1b[31m" + "\nindex error";
    }
    for (var i = length - 1; i >= index - 1; i--) {
        SequenatialList[i + 1] = SequenatialList[i];
    }
    SequenatialList[index - 1] = element;
    length++;
    return "\x1b[32m" + "\npush successfully"
}

/**
 * 
 * @param {删除第几个元素} index 
 */
function pop(index) {
    if (index < 0 || index > length + 1) {
        return "\x1b[31m" + "\nindex error";
    }
    var popElement = SequenatialList[index - 1];
    for (var i = index - 1; i < length; i++) {
        SequenatialList[i] = SequenatialList[i + 1];
    }
    length--;
    return "\x1b[32m" + "\npop element `" + popElement + "` successfully";
}

/**
 * 按位置查找元素
 * @param {第几个元素} index 
 * @returns 
 */
function findElementByIndex(index){
    if(index<0||index>length+1){
        return "\x1b[31m" + "\nindex error";
    }else{
        return SequenatialList[index-1];
    }
}
/**
 * 按值查找
 * @param {什么值} element 
 * @returns 
 */
function findElementByValue(element){
    for(var i =0;i<length;i++){
        if(SequenatialList[i]==element){
            return "\x1b[32m" + "\nfind element `" + element + "` successfully, the index is " + (i+1);
        }
    }
    return "\x1b[31m"+"not find this element";
}

//输出顺序表
function print() {
    process.stdout.write("\x1b[93m" + "[")
    if (length != 0) {
        for (var i = 0; i < length; i++) {
            if (i == length - 1) {
                process.stdout.write("\x1b[93m" + ' ' + SequenatialList[i] + ' ]' + "\x1b[0m");
            } else {
                process.stdout.write("\x1b[93m" + ' ' + SequenatialList[i] + ',');
            }
        }
    } else {
        process.stdout.write("\x1b[93m" + ' ]' + "\x1b[0m");
    }
}

function getSequenatialListLength(){
    return length;
}

console.log(initial());
console.log(push(1, 1));
print();
console.log(push(1, 2));
print();
console.log(push(1, 3));
print();
console.log(push(4, 4));
print();
console.log(push(2, 5));
print();
// console.log(pop(3));
// print();
// console.log(pop(1));
// print();
// console.log(pop(2));
// print();
// console.log(pop(1));
// print();
// console.log(pop(1));
// print();
console.log(findElementByValue(5));
console.log(findElementByIndex(3));
console.log(findElementByValue(7));