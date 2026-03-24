import math

def check_root(strng):
    
    items = strng.split(',')
    
    if len(items) != 4:
        return 'incorrect input'
    
    nums = []
    
    for i in items:
        try:
            nums.append(int(i.strip()))
        except ValueError:
            return 'incorrect input'
        
    nums.sort()
    
    for i in range(3):
        if nums[i] + 1 != nums[i + 1]:
            return 'not consecutive'
    
    product = 1
    for i in nums:
        product *= i
            
    result = product + 1
    root = int(math.sqrt(result))
    
    return f'{result}, {root}'