queue = []

def insert(element):
    queue.append(element) #inserts element into the end of the queue
    print queue

def delete():
    queue.pop(0) #removes 0th element of the queue
    print queue
