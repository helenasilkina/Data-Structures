// FIFO (First In First Out) structure

var Array = []

function insert(element) {
 Array.push(element);
 console.log(Array, 'Add last element into Array');
}

function delete() {
 Array.shift();
 console.log(Array, 'Delete first element in Array');
}
