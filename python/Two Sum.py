def two_sum(numbers, target):
    
    seen = {}

    for i in range(len(numbers)):
        current = numbers[i]
        complement = target - current

        if complement in seen:
            return (seen[complement], i)

        seen[current] = i