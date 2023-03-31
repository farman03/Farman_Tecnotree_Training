# define a function that takes a list of numbers and returns the sum of all even numbers
def sum_even_numbers(numbers):
    # initialize the sum to zero
    total = 0
    # loop through each number in the list
    for num in numbers:
        # check if the number is even
        if num % 2 == 0:
            # add the even number to the total sum
            total += num
    # return the sum of even numbers
    return total

# ask the user to input a list of numbers separated by spaces
numbers = input("Enter a list of numbers separated by spaces: ").split()

# convert the input string into a list of numbers
numbers = [float(num) for num in numbers]

# call the function to calculate the sum of even numbers
result = sum_even_numbers(numbers)

# print the result
print(f"The sum of even numbers in {numbers} is {result}")
