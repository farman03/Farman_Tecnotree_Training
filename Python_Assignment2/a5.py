# ask the user to input the first list of numbers
list1 = input("Enter the first list of numbers separated by spaces: ").split()

# convert the list of strings to a list of integers
list1 = [int(num) for num in list1]

# ask the user to input the second list of numbers
list2 = input("Enter the second list of numbers separated by spaces: ").split()

# convert the list of strings to a list of integers
list2 = [int(num) for num in list2]

# find the common elements between the two lists
common_elements = list(set(list1) & set(list2))

# print the common elements
print("The common elements between the two lists are:", common_elements)
