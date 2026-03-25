
def sum_factorial(lst):
    print(lst)
    
    result = 0;
    
    for i in lst:
        factorial = 1
        for n in range(1, i + 1 ):
            factorial *= n
        result += factorial
    return result
        
            