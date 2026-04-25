# write the function is_anagram
def is_anagram(test, original):
    
    t = test.lower()
    o = original.lower()
    
    if len(t) != len(o):
        return False
    
    seen = {}
    
    for char in t:
        seen[char] = seen.get(char,0) +1
        
    for char in o:
        if char not in seen or seen[char] == 0:
            return False
        seen[char] -= 1
        
    return True