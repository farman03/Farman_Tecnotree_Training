# ask the user to input a list of numbers
num_list = input("Enter a list of numbers, separated by spaces: ")
# convert the input string into a list of integers
num_list = [int(num) for num in num_list.split()]

# create a new list to store the squared elements
squared_list = []

# loop through each number in the list and square it
for num in num_list:
    squared = num ** 2
    squared_list.append(squared)

# print the squared list
print(squared_list)
