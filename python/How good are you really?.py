def better_than_average(class_points, your_points):
    
    add = 0
    
    for i in class_points:
        add += i
        
    avg = add / len(class_points)
    
    if your_points > avg:
        return True
    return False
    