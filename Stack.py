stack = []

def push(element): #insertion in a stack is called 'pushing' into a stack
    stack.append(element)
    print stack

def customPop():
    stack.pop(len(stack)-1)
    print stack
