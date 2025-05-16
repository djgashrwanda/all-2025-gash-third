def odd_number_printer():
    def is_odd(num):
        if num % 2 != 0:
            print(num)
    return is_odd

# Create a closure for printing odd numbers
print_odd = odd_number_printer()

# Test the closure by printing odd numbers in a range
for i in range(1, 11):
    print_odd(i)
