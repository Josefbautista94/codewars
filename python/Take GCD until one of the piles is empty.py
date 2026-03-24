import math
from functools import reduce

def calc(numbers):
    g = reduce(math.gcd, numbers)
    rounds = min(numbers) // g
    return rounds * g * len(numbers)
