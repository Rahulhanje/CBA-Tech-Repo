class Book:
  title= ''
  author=''
  price=''
  
  def __init__(self,title,author,price):
    self.title=title
    self.author=author
    self.price=price
    
  def get_book_details(self):
    print(f"The details of book are :{self.title},' ',{self.author},' ',{self.price}")
    
book1=Book('abc','New',455.56)
book1.get_book_details()