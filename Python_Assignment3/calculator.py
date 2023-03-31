# Create a function to add two numbers
def add(num1, num2):
    return num1 + num2

# Create a function to subtract two numbers
def subtract(num1, num2):
    return num1 - num2

# Create a function to multiply two numbers
def multiply(num1, num2):
    return num1 * num2

# Create a function to divide two numbers
def divide(num1, num2):
    return num1 / num2

# Create the main function to get input from the user and perform calculations
def main():
    # Get the first number from the user
    num1 = float(input("Enter the first number: "))

    # Get the operation from the user
    operation = input("Enter the operation (+, -, *, /): ")

    # Get the second number from the user
    num2 = float(input("Enter the second number: "))

    # Perform the calculation based on the operation entered by the user
    if operation == "+":
        result = add(num1, num2)
    elif operation == "-":
        result = subtract(num1, num2)
    elif operation == "*":
        result = multiply(num1, num2)
    elif operation == "/":
        result = divide(num1, num2)
    else:
        print("Invalid operation. Please enter +, -, *, or /")
        return

    # Print the result to the console
    print("Result: ", result)

# Call the main function to start the program
main()
