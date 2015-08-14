global heap
global currSize

def parent(i): #returns parent index of ith index
    return i/2

def left(i): #returns left child of ith index
    return 2*i

def right(i): #returns right child of ith index
    return (2*i + 1)
