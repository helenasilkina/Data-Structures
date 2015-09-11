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

function insert(elem) {
  var currentSize = 0;
  var index = heap.length;
  var parent = parent(index);
  var flag = 0;
  
  heap.push(elem);
  currentSize += 1;

  while (flag != 1) {
    if (index == 1) {
      flag = 1;
    } else if (heap[par] > elem) {
      flag = 1;
    } else {
      swap(parent, index);
      index = parent;
      parent = parent(index);
    }  
  }
  
  console.log(heap);
  
  function extractMax() {
    if (currentSize != 0) {
      var maximum = heap[1];
      heap[1] = heap[currentSize];
      heap.pop(currentSize); 
      currentSize -= 1; 
      maxHeapify(1);
      return maximum;
    }  
  }    
}
