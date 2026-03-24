def decode(string_):
    
    if not isinstance(string_, str):
        return "Input is not a string"

    normal = "abcdefghijklmnopqrstuvwxyz"
    reverse = "zyxwvutsrqponmlkjihgfedcba"
    
    upper_normal = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    upper_reverse = "ZYXWVUTSRQPONMLKJIHGFEDCBA"
    
    answer = ''
    
    for c in string_:
        if c.islower():
            index = reverse.index(c)
            answer += normal[index]
        elif c.isupper():
            index = upper_reverse.index(c)
            answer += upper_normal[index]
        else:
            answer += c
        
    return answer