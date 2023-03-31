# define a function that takes a string and returns a new string with vowels removed
def remove_vowels(string):
    # define a set of vowels to remove
    vowels = set('aeiouAEIOU')
    # initialize an empty string to store the result
    result = ''
    # loop through each character in the string
    for char in string:
        # check if the character is not a vowel
        if char not in vowels:
            # add the character to the result string
            result += char
    # return the result string with vowels removed
    return result

# ask the user to input a string
string = input("Enter a string: ")

# call the function to remove vowels from the string
result = remove_vowels(string)

# print the result
print(f"The string '{string}' with vowels removed is '{result}'")
