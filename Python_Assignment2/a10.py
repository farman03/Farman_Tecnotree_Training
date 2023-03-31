# ask the user to input a list of strings
str_list = input("Enter a list of strings, separated by spaces: ")
# convert the input string into a list of strings
str_list = str_list.split()

# create a new list to store the palindromes
palindrome_list = []

# loop through each string in the list
for word in str_list:
    # check if the word is equal to its reverse
    if word == word[::-1]:
        # if so, add it to the palindrome list
        palindrome_list.append(word)

# print the palindrome list
print(palindrome_list)
