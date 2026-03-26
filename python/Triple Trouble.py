def triple_trouble(one, two, three):
    
    solution = ''
    
    for i in range(len(three)):
        
        solution += one[i] + two[i] + three[i]
        
    return solution;