while True:  # keep looping until a valid denominator is entered
    try:  # try to perform the division
        # get numerator and denominator inputs from the user
        numerator = float(input("Enter the numerator: "))
        denominator = float(input("Enter the denominator: "))
        
        result = numerator / denominator  # perform the division
        
        # print the result
        print(f"{numerator} / {denominator} = {result}")
        
        break  # exit the loop if division is successful
    except ZeroDivisionError:  # handle the zero division error
        # print error message and prompt user to enter a non-zero denominator
        print("Error: Denominator cannot be zero. Please enter a non-zero denominator.")
