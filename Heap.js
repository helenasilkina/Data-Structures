var heap = [];
var currentSize = 0;

//returns parent index of ith index
function parent(i) {
  return i/2;
}

//returns left index of ith index
function left(i) {
  return 2 * i;
}

//returns right index of ith index
function right(i) {
  return (2 * i + 1);
}

// to swap a-th and b-th elements in heap
function swap(a, b) {
  var temp = heap[a];
  heap[a] = heap[b];
  heap[b] = temp;
}  
