# //Demo on Control Flow Statements in Python for beginners:

# //Conditional Statements (if, elif, else):

# //Conditional statements are used to check if a certain condition is true or false and execute code based on that. 
# //In Python, the if statement is used for this purpose.

# Example:
x = 5
if x > 3:
    print("x is greater than 3")

# Output:
# x is greater than 3

# //In the above example, the if statement checks whether x is greater than 3. 
# //If it is, then the code inside the if statement is executed.

# //The elif statement is used to add additional conditions to the if statement.

# Example:
x = 5
if x > 10:
    print("x is greater than 10")
elif x > 3:
    print("x is greater than 3")
else:
    print("x is less than or equal to 3")

# Output:
# is greater than 3

# //In the above example, the if statement checks whether x is greater than 10. 
# //If it is, then the first code block is executed. 
# //If not, the elif statement checks whether x is greater than 3.
# //If it is, then the second code block is executed. 
# //If neither of these conditions is true, then the else statement is executed.

# //Logical Operators in Conditional Statements:

# //Python has three logical operators: and, or, and not. 
# //These are used to combine multiple conditions in a single if statement.

# Example:

x = 5
y = 10
if x > 3 and y < 15:
    print("Both conditions are true")

# Output:
# //Both conditions are true
# //In the above example, the and operator is used to check whether both conditions are true.

# //Nested If Statements:
# //A nested if statement is an if statement inside another if statement.
# //They are used to test multiple conditions.
# Example:
x = 5
y = 10
if x > 3:
    if y < 15:
        print("Both conditions are true")

# Output:
# Both conditions are true
# //In the above example, the outer if statement checks whether x is greater than 3.
# //If it is, then the inner if statement checks whether y is less than 15. 
# //If both conditions are true, then the code inside the inner if statement is executed.

# //Loops (for and while):
# //Loops are used to execute a block of code repeatedly. 
# //There are two types of loops in Python: for loops and while loops.

# //For Loop:
# //A for loop is used to iterate over a sequence (such as a list or tuple) or other iterable object (such as a string).

# Example:
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# //In the above example, the for loop iterates over the fruits list and prints out each item in the list.

# //While Loop:
# //A while loop is used to execute a block of code as long as a certain condition is true.

# Example:
i = 0
while i < 5:
    print(i)
    i += 1
# //In the above example, the while loop executes the code inside the loop as long as i is less than 5. 
# //The value of i is incremented by 1 each time the loop runs.





