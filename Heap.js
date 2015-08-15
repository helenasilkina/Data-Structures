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
