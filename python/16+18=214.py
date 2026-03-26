def add(num1, num2):
    
    digits1 = str(num1)
    digits2 = str(num2)
    
    solution = ''
    
    i = len(digits1) -1
    j = len(digits2) -1
    
    
    while i >=0 or j >=0:
        d1 = int(digits1[i]) if i >=0 else 0
        d2 = int(digits2[j]) if j >=0 else 0
        
        solution = str(d1 + d2) + solution
        
        i -=1
        j -=1
        
    return int(solution)