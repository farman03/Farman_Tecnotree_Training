num_terms = int(input("Enter the number of terms to generate in the Fibonacci series: "))

# Initialize the first two terms of the series
a, b = 0, 1

# Iterate through the series and print each term
for i in range(num_terms):
    print(a, end=" ")
    a, b = b, a + b
