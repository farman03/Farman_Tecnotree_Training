# Ask the user to enter a list of numbers separated by commas
numbers = input("Enter a list of numbers separated by commas: ").split(",")

# Convert the list of strings to a list of integers
numbers = [int(num) for num in numbers]

# Initialize a variable to store the sum of even numbers
sum_of_evens = 0

# Use a for loop to iterate over the list of numbers
for num in numbers:
    if num % 2 == 0:   # Check if the number is even
        sum_of_evens += num  # Add the number to the sum_of_evens variable

# Print out the sum of even numbers
print(f"The sum of all even numbers is: {sum_of_evens}")
