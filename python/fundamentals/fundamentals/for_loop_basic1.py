# Basic
for i in range(0,151):
    print(i)

#Multiples of Five
for i in range(5,1001,5):
    print(i)

#Counting, the Dojo Way
for i in range(1,101):
    if(i%10 == 0):
        print('Coding Dojo')
        continue
    if(i%5 == 0):
        print('Coding')

# Whoa. That sucker's Huge
count = 0
for i in range(500001):
    if(i==1 or i%2 == 1):
        count += i
print(count)

# Countdown by fours
for i in range(2018,0,-4):
    print(i)

# FLexible Counter
lowNum = 1
highNum = 101
multi = 7
for i in range(lowNum, highNum, multi):
    print(i)

