# Arrays, Lists, and Dictionaries
import array

array_1= array.array('i',([5,4,7,22,3,4]))
print(type(array_1))

array_1.append('43')
print(array_1)
array_1.remove(22)
print(array_1)
array_1[3]=50
print(array_1)
for i in array_1:
  print(i)
  