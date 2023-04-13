#  failing test case
def test_is_prime():
    assert is_prime(5) == True

# minimal code required to pass the test
def is_prime(num):
    if num <= 1:
        return False
    
    for i in range(2, num):
        if num % i == 0:
            return False
    
    return True
#  test and refactor the code
import math

def is_prime(num):
    if num <= 1:
        return False
    
    for i in range(2, int(math.sqrt(num))+1):
        if num % i == 0:
            return False
    
    return True

#  additional test cases
def test_is_prime():
    assert is_prime(5) == True
    assert is_prime(7) == True
    assert is_prime(11) == True
    assert is_prime(4) == False
    assert is_prime(20) == False
    assert is_prime(12) == False
    assert is_prime(-7) == False
