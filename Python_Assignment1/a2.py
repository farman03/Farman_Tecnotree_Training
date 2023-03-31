# Ask the user to enter a temperature in Celsius
celsius = float(input("Enter temperature in Celsius: "))

# Convert Celsius to Fahrenheit using the formula F = (C * 9/5) + 32
fahrenheit = (celsius * 9/5) + 32

# Print out the result
print(f"{celsius:.1f}°C is {fahrenheit:.1f}°F")
