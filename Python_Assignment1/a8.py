# Ask the user to enter a list of names separated by commas
names = input("Enter a list of names separated by commas: ").split(",")

# Sort the list of names in alphabetical order using the built-in sorted() function
sorted_names = sorted(names)

# Print out the sorted list of names
print("The names in alphabetical order are:")
for name in sorted_names:
    print(name)
