num1 = 42 #comment single line, variable declaration, primitive data type number
num2 = 2.3 #comment single line,variable declaration, primitive data type number float
boolean = True #comment single line, primitive data type boolean
string = 'Hello World' #comment single line, #primitive data type strings, variable declaration
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives'] #variable declaration, Composite data type List, Initialize
person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False} #variable initialization Compositie data type called Dictionary, Initialize
fruit = ('blueberry', 'strawberry', 'banana') #compositie data type Tuple, initialize
print(type(fruit)) #log statement, type check on composite data type Tuple fruit
print(pizza_toppings[1]) #log statement, Comoposite List Access Value
pizza_toppings.append('Mushrooms') #compositie data type list, add value
print(person['name']) #log statement, compositie data dictionary access value
person['name'] = 'George' #Composite data dictionary change value
person['eye_color'] = 'blue'#composite data type dictionary add value
print(fruit[2]) #log statement, composite data tuple access value

if num1 > 45: #conditional if
    print("It's greater") #conditional log statement primitive string data
else: #conditional else
    print("It's lower") #conditional log statement primitive data type string

if len(string) < 5: #conditional if, function, argument 
    print("It's a short word!") #conditional log statement, return a integrer value
elif len(string) > 15: #conditional else if, function, argument
    print("It's a long word!") #conditional log statement, data type string
else: #conditional else 
    print("Just right!") #conditional log statement data type string

for x in range(5): #for loop start, function, argument
    print(x) #for loop log statement integer
for x in range(2,5): #for loop start, function, arguments start-end
    print(x) #for loop log statement
for x in range(2,10,3): #for loop sequence, function, argument, start-end-increment
    print(x) #for loop log statement
x = 0 #variable delcaration
while(x < 5): #while loop start
    print(x) #while loop log statement, data type number integer
    x += 1 #while loop increment

pizza_toppings.pop() #list delete value, function, return value
pizza_toppings.pop(1) #list delete value, function, argument

print(person) #log statement, data type dictionary access value
person.pop('eye_color') #dictionary delete value, function, argument
print(person) #log statement data type dictionary

for topping in pizza_toppings: #for loop start
    if topping == 'Pepperoni': #for loop conditional if
        continue #for loop continue
    print('After 1st if statement') #for loop log statement
    if topping == 'Olives': #for loop conditional if
        break #for loop, break, stop

def print_hello_ten_times(): #function declaration
    for num in range(10): #function for loop start, sequence
        print('Hello') #function for loop log statement

print_hello_ten_times() #function invoking

def print_hello_x_times(x): #function declaration, parameter
    for num in range(x): #function, parmeter, for loop
        print('Hello') #function log statement

print_hello_x_times(4) #function, argument

def print_hello_x_or_ten_times(x = 10): #function, default parameter
    for num in range(x): #function, for loop, parameter
        print('Hello') #function, log statement

print_hello_x_or_ten_times() #function
print_hello_x_or_ten_times(4) #function, argument


"""
Bonus section
"""

# print(num3) NameError: not defined
# num3 = 72 No Arror
# fruit[0] = 'cranberry' TypeError: 'tuple' does not support assignment
# print(person['favorite_team']) KeyError: 'favorite_team'
# print(pizza_toppings[7]) IndexError: list index out of range
#   print(boolean) Unexpected Indent
# fruit.append('raspberry') tuple no attribute append
# fruit.pop(1) tuple no attribute pop