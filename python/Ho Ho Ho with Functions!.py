# 🧩 Challenge: <Ho Ho Ho with Functions!> (Codewars - <6kyu>)
# 🔗 Link: https://www.codewars.com/kata/<kata-id>
# 📂 Category: <Algorithms, etc.>
#
# 📝 Description:
# <Santa is learning programming. And what could be the first program, he wants to write? Yes, the "Hello world!" of Christmas: "Ho Ho Ho!". He wants to write a function ho(), which should have the following return values:

# ho()         # should return "Ho!"
# ho(ho())     # should return "Ho Ho!"
# ho(ho(ho())) # should return "Ho Ho Ho!"
# Unfortunately he couldn't find any tutorial, which explains, how he could implement that. Can you help him?

# Rules:

# each call of ho() must add a "Ho" to the string
# the "Ho"'s must be separated by a space
# at the end of the string, there must be an exclamation mark (!), without a space
# >
#
# 🧪 Examples:
# input → output
# input → output
#
# 🧠 Key Concepts:
# - loops, conditionals, strings, math, etc.
#
# 🛠️ Approach (Plain English):
# 1. Step 1
# 2. Step 2
# 3. Step 3
#
# ⚠️ Edge Cases:
# - input is 0
# - negative numbers
# - empty input, etc.
#
# 🔁 Time & Space Complexity:
# - Time: O(?)
# - Space: O(?)
#
# 📌 Notes / Takeaways:
# - What you learned
# - Python tricks used




def ho(s = ''):
    if s == "":
        return 'Ho!'
    
    return s[:-1]+ ' Ho!'