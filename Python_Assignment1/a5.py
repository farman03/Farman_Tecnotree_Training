# Ask the user to enter two numbers
num1 = float(input("Enter the first number: "))
num2 = float(input("Enter the second number: "))

# Calculate the result of adding, subtracting, multiplying, and dividing the two numbers
addition = num1 + num2
subtraction = num1 - num2
multiplication = num1 * num2
division = num1 / num2

# Print out the results
print(f"The result of adding {num1} and {num2} is {addition}.")
print(f"The result of subtracting {num2} from {num1} is {subtraction}.")
print(f"The result of multiplying {num1} and {num2} is {multiplication}.")
print(f"The result of dividing {num1} by {num2} is {division:.2f}.")
