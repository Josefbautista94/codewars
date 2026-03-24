def positive_sum(arr):
    # Your code here
    result = 0
    
    for i in arr:
        if i > 0:
            result += i
    return result