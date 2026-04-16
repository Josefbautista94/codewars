def valid_parentheses(paren_str):
    
    stack = []
    dict = { ')' : '('}
    
    for char in paren_str:
        
        if char in dict:
            
            if len(stack) == 0:
                return False
            
            top = stack.pop()
            
            if top != dict[char]:
                return False
            
        else:
            stack.append(char)
        
    return len(stack) == 0