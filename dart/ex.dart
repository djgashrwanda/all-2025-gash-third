
/*void main() {
    var mark = 90;  
    
  
     if (mark >= 101 || mark < 0 ) {   
        print("invalid marks");
    }
    else if (mark >= 80 || mark >= 100){
      print("your are excellent");
    }
    else if (mark >= 0 || mark <= 79){
      print("valid marks");
    }

    else {
      print("invalid in put");
    }

   

}
*/

void main() {
  var mark = -4;  


  switch (mark) {
    case int mark when (mark < 0 || mark > 100):
      print("invalid marks");
      break;
    case int mark when (mark >= 80 && mark <= 100):
      print("you are excellent");
      break;
    case int mark when (mark >= 0 && mark <= 79):
      print("valid marks");
      break;
    default:
      print("invalid input");
  }
}


