# ask the user to input a list of words
word_list = input("Enter a list of words separated by spaces: ").split()

# initialize a variable to keep track of the longest word
longest_word = ""

# loop through each word in the list
for word in word_list:
    # check if the current word is longer than the previous longest word
    if len(word) > len(longest_word):
        longest_word = word

# print the longest word
print("The longest word in the list is:", longest_word)
