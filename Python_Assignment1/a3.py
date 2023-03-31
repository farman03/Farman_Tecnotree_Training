# Import the math module to use the value of pi
import math

# Ask the user to enter the radius of the circle
radius = float(input("Enter the radius of the circle: "))

# Calculate the area of the circle using the formula A = pi * r^2
area = math.pi * radius ** 2

# Calculate the circumference of the circle using the formula C = 2 * pi * r
circumference = 2 * math.pi * radius

# Print out the results
print(f"The area of the circle with radius {radius} is {area:.2f}.")
print(f"The circumference of the circle with radius {radius} is {circumference:.2f}.")
