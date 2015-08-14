def hashFunc(piece):
    words = piece.split(" ") #splitting string into words
    colour = words[0]
    shape = words[1]
    poleNum = 0
    for i in range(0, 3):
        poleNum += ord(colour[i]) - 96
        poleNum += ord(shape[i]) - 96
    return poleNum
