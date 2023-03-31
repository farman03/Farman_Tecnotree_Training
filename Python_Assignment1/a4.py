# Ask the user to enter a string
string = input("Enter a string: ")

# Calculate the length of the string using the len() function
length = len(string)

# Get the first character of the string using string indexing
first_char = string[0]

# Get the last character of the string using negative string indexing
last_char = string[-1]

# Reverse the string using string slicing with a step of -1
reverse = string[::-1]

# Print out the results
print(f"The length of the string is {length}.")
print(f"The first character of the string is '{first_char}'.")
print(f"The last character of the string is '{last_char}'.")
print(f"The string in reverse order is '{reverse}'.")
