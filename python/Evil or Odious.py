def evil(n):
    counter = bin(n).count('1')
    if counter % 2 == 0:
        return "It's Evil!"
    else:
        return "It's Odious!"