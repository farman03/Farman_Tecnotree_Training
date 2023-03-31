# Ask the user to enter a list of numbers
num_list = input("Enter a list of numbers separated by commas: ").split(",")
# Convert the string list to a list of floats
num_list = [float(num) for num in num_list]

# Find the largest and smallest numbers in the list using the built-in max() and min() functions
largest_num = max(num_list)
smallest_num = min(num_list)

# Print out the results
print(f"The largest number in the list is {largest_num}.")
print(f"The smallest number in the list is {smallest_num}.")
