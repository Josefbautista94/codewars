def vowel_one(s):
    vowels = 'aeiouAEIOU'
    result = ''

    for char in s:
        if char in vowels:
            result += '1'
        else:
            result += '0'

    return result