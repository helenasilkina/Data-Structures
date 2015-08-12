// the Stack is a Last-In-First-Out (LIFO) data structure

function init() {
 var Array = [];
}

function add(element) {
 Array.push(element);
 console.log(Array, 'Add last element into Array');
}

function delete() {
 Array.pop();
 console.log(Array, 'Delete last element in Array');
}
