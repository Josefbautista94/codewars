def name_value(my_list):
    
    char ='abcdefghijklmnopqrstuvwxyz'
    result = []
    
    for index, value in enumerate(my_list, start =1):
        total = 0
        
        for c in value:
            if c != ' ':
                total += char.index(c) + 1
                
        result.append(total * index)
        
    return result
