// LIFO (last in first out)

var Array = []

function add(element) {
 Array.push(element);
 console.log(Array, 'Add last element into Array');
}

function delete() {
 Array.pop();
 console.log(Array, 'Delete last element in Array');
}
