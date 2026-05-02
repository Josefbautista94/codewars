def number_to_pwr(number, p): 
    solution = 1;
    current = 0;
    
    while current < p:
        solution *= number
        current +=1
        
    return solution