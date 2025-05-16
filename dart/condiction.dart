
// if else statement

/* void main(){
  int age = 20;
  if (age >= 12) {
    print("your child is mature");
  }
  else {
    print("your child is younger")
  }

}
*/


// nested if statement
void main(){
        int num1 = 1200;
        int num2 = 1000;
        int num3 = 150;

        if(num1 > num2  && num1 > num3){
            print("Num 1 is greater: i.e $num1");
        }
        else if(num2 > num1 && num2 > num3){
           print("Num2 is greater: i.e $num2");
        }
        else {
            print("Num3 is greater: i.e $num3");
        }
}