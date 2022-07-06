# x = 16
# if x > 10:
#     print(4)
# if x > 15:
#     print('almost there')

# dogs = ['pit', 'rot', 'bluenose']

# dogs.append('great dane')
# dogs.pop(0)
# dogs[0] = dogs[2]
# print(dogs)

# float_to_int = int(23.3)
# print(float_to_int)
# print(int(25.7))
# print(complex(22))
# import random
# print(random.randint(1,100))

# frog = "Green Frog"
# place = "Green River"

# print(f"At the {place} you'll find the unique {frog}")

# print("Whats up bitches! I have {} hoes named {}".format(frog, place))

# print(frog.upper())

# print(num3)
# num3 = 72

newList = [1,2,3,4,5,6,7,8,9,10]
thisLst = newList[2:8]
print(thisLst)

thisLst.append(100)
print(newList)

print(max(thisLst))
print(min(thisLst))

testTup = ('1', '2')

person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False} #variable initialization Compositie data type called Dictionary, Initialize

print(person["name"])
# print(person[name])

print(newList.pop(2))
pizza_toppings = ['Pepperoni', 'Sausage', 'Olives', 'Cheese', 'Olives'] #variable declaration, Composite data type List, Initialize

for topping in pizza_toppings: #for loop start
    if topping == 'Pepperoni': #for loop conditional if
        continue #for loop continue
    print('After 1st if statement') #for loop log statement
    if topping == 'Olives': #for loop conditional if
        break #for loop, break, stop
num3 = 72
print(num3)

if(num3 > 50) and (num3 < 100):
    print('its good')


for i in pizza_toppings:
    print(i)


x = 8

if x == 8:
    print("x is eight, hooray!")
    print("hooray forx, which is eight")

newList = []
def greaterThan(list):
    count = 0
    for i in list:
        if i > list[1]:
            count += 1
            newList.append(i)
            print(newList)
    print(count)
    return newList
run = greaterThan([5,2,3,2,1,4])
print(run)

def sampleFunction(para1, para2):
    return para1 * (para2 - para1)

print(sampleFunction(2,6))

def be_cheerful(name='', repeat=2):
    print(f"good morning {name}\n"*repeat)

be_cheerful("Todd")

students2 = [
         {'first_name':  'Michael', 'last_name' : 'Jordan'},
         {'first_name' : 'John', 'last_name' : 'Rosales'},
         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
         {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]

if "name" in person:
    person["name"] = 'frank'
else:
    person["name"] = 'newName'

print(person)

print(students2)
for i in pizza_toppings:
    print(i)

for ea_key in person:
    print(ea_key, "-", person[ea_key])