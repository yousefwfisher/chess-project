# a simple callcolator


# the fungtion mithod

def add (x ,y):
    return x + y
def subtract(x ,y):
    return x - y
def multiply (x ,y):
    return x * y
def divide(x ,y):
    return x / y

# take the input from user

n1 = float(input("enter friest number"))
n2 = float(input("enter second number"))
op = input('enter symbole (+ , - , x , /)')

# callig the fungtion and see the output

if op == '+':
    print(add(int(n1),int(n2)))
elif op == '-':
    print(subtract(int(n1),int(n2)))
elif op == 'x':
    print(multiply(int(n1),int(n2)))
elif op == '/':
    print(divide(int(n1),int(n2)))