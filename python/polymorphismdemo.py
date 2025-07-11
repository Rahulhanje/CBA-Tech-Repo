#method overriding(Runtime polymorphism)

class Animal:
  def eatFood(self):
    print('Animals eat food')
  
class Elephant(Animal):
  def eatFood(self):
    print('Elephant eat grass')
    
El=Elephant()
El.eatFood()#method overriden in elephant class ie.runtime polymorphism


