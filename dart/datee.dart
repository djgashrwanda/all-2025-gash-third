/*
void main() {
  DateTime start = DateTime(2025, 1, 1);
  DateTime end = DateTime(2025, 2, 1);

  Duration diff = end.difference(start);
  print("Difference: ${diff.inDays} days");
}
*/
/*

void main() {
  var now = DateTime.now();
  var nextWeek = now.add(Duration(hours: 20)); // Add 7 days
  var yesterday = now.subtract(Duration(days: 1)); // Subtract 1 day

  print("Today: $now");
  print("Next Week: $nextWeek");
  print("Yesterday: $yesterday");
}
*/

void main() {
  DateTime now = DateTime.now();
  print("to day is ${now.day}");
  print("to month is ${now.month}");
  print("to year is ${now.year}");
}
