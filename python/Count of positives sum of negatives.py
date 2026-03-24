def count_positives_sum_negatives(arr):
    if not arr:
        return []
    
    posCount = 0;
    negSum = 0;
    
    for i in arr:
        if i < 0:
            negSum += i
        elif i > 0:
            posCount += 1
    return [posCount,negSum] 