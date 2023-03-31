# # ask the user to input a list of integers
# numbers = list(map(int, input("Enter a list of integers: ").split()))

# # use lambda functions and list comprehensions to filter out even numbers and double the remaining odd numbers
# result = list(map(lambda x: x * 2, filter(lambda x: x % 2 == 1, numbers)))

# # print the result
# print(result)


# file = open('Demo.txt','r')
# print(file)

# //Demo Example of file handling in Python that demonstrates how to open a file, read its contents, and write to it:

# Opening a file
file = open('Demo.txt', 'r')
print(file)

# Reading from a file
content = file.read()
print(content)

# Closing a file
# file.close()

# Writing to a file
with open('Demo.txt', 'a') as file:
    file.write('\nHow are you?.')

# Reading from a file again
with open('Demo.txt', 'r') as file:
    content = file.read()
    print(content)
