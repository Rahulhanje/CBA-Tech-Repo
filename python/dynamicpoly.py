#dynamic typing (duck typing)

class Cat:
  def sound(self):
    print('cat meows')

class Dog:
  def sound(self):
    print('Dog barks')

def do_sound(animal):
  animal.sound()
  
do_sound(Cat())
do_sound(Dog())
    
  