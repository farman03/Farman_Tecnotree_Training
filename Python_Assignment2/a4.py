# ask the user to input a list of numbers
number_list = input("Enter a list of numbers separated by spaces: ").split()

# convert the list of strings to a list of floats
number_list = [float(num) for num in number_list]

# sort the list of numbers in ascending order
number_list.sort()

# calculate the median value
if len(number_list) % 2 == 0:
    median = (number_list[len(number_list)//2] + number_list[len(number_list)//2-1]) / 2
else:
    median = number_list[len(number_list)//2]

# print the median value
print("The median value is:", median)
