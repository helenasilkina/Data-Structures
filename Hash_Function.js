/*
* Tests with:
* hash('Color red')
*/

function hash(piece) {
  var words = piece.split(" "),
    colour = words[0],
    shape = words[1],
    hashNumber = 0;
    for (var i = 0; i < 3; i++) {
      hashNumber += colour[i].charCodeAt(0) - 64;
      hashNumber += shape[i].charCodeAt(0) - 64;
    }
    return hashNumber;
}
