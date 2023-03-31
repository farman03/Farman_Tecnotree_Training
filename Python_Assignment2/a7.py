# ask the user to input a list of numbers
num_list = input("Enter a list of numbers separated by spaces: ").split()
num_list = [int(num) for num in num_list] # convert the input string to a list of integers

# define a function to check if a number is prime
def is_prime(num):
    if num < 2:
        return False
    for i in range(2, int(num**0.5) + 1):
        if num % i == 0:
            return False
    return True

# create a new list with only the prime numbers
prime_list = [num for num in num_list if is_prime(num)]

# print the list of prime numbers
print("The prime numbers in the list are:", prime_list)
