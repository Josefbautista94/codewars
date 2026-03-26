def solution(number):

    numbers = []
    nums = 0
    result = 0 
    while(nums < number-1):
        nums+= 1
        numbers.append(nums)

    for i in numbers:
        if i % 5 == 0 or i % 3 == 0:
            result += i
    
    return result