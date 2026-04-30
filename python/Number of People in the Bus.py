def number(bus_stops):
    
    people = 0;
    
    for on,off in bus_stops:
        people += on
        people -= off
    
    return people;