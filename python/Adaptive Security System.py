def breach_attempts(hackers, security_level, increase):
    
    breaches = 0;
    
    for i in hackers:
        if i > security_level:
            breaches += 1;
        else:
            security_level += increase
        
    return breaches