# ask the user to input a string
string = input("Enter a string: ")

# create an empty dictionary to store the letter counts
letter_counts = {}

# loop through each character in the string
for char in string:
    # check if the character is a letter
    if char.isalpha():
        # convert the letter to lowercase
        char = char.lower()
        # check if the letter is already in the dictionary
        if char in letter_counts:
            # if it is, increment the count
            letter_counts[char] += 1
        else:
            # if it's not, add it to the dictionary with a count of 1
            letter_counts[char] = 1

# print the letter counts
for letter, count in letter_counts.items():
    print(f"{letter}: {count}")
