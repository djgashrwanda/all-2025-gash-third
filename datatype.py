try:

 age= int(input("enter your ages : "))
 print("your age is " , age)
 if age<0:
  print("negative age are not allowed")
 elif age>0:
  award=500/age
  print("award is  " , award)
 else:
  print("invalid")
  
except ZeroDivisionError:
 print("division of zero is invalid")
except ValueError:
 print("use correc dAta type")
