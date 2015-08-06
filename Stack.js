// LIFO (last in first out)

var Array = []

function add(element) {
 Array.unshift(element);
 console.log(Array, 'Add first element into Array');
}

function delete() {
 Array.pop();
 console.log(Array, 'Delete last element in Array');
}
