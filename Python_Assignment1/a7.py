# Ask the user to enter a number
num = int(input("Enter a number: "))

# Check if the number is even or odd using the modulo operator %
if num % 2 == 0:
    print(f"{num} is even.")
else:
    print(f"{num} is odd.")
