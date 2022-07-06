# Update Values in Dictionaries & Lists

x = [ [5,2,3], [10,8,9] ] 
students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]

x[1][0] = 15
print(x[1][0])
students[0]["last_name"] = 'Bryant'
print(students[0]["last_name"])
sports_directory['soccer'][0] = 'Andres'
print(sports_directory['soccer'][0])
z[0]['y'] = 30
print(z[0]['y'])

# Iterate through a list of dictionaries
students2 = [
         {'first_name':  'Michael', 'last_name' : 'Jordan'},
         {'first_name' : 'John', 'last_name' : 'Rosales'},
         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
         {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]

def iterateDictionary(some_list):
    for student in students2:
        for key, val in student.items():
            print(f"{key} - {val}")

iterateDictionary(students2)

# Get Values From a List of Dictionaries
def iterateDictionary2(key_name, some_list):
    for student in some_list:
        print(student[key_name])

iterateDictionary2('first_name', students2)

#Iterate Through a distionary with List values

dojo = {
   'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
   'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}

def printInfo(some_dict):
    for each in some_dict:
        print(len(some_dict[each]), each)
        for index in some_dict[each]:
            print(index)
printInfo(dojo)
