def test_is_prime():
    assert is_prime(5) == True
    assert is_prime(7) == True
    assert is_prime(11) == True
    assert is_prime(4) == False
    assert is_prime(20) == False
    assert is_prime(1) == False
    assert is_prime(-7) == False
