function naughtyOrNice(data) {
  
    let naughtyCount = 0;
    let niceCount = 0;
    
    for (let month in data) {
        for (let day in data[month]) {
            if (data[month][day] === 'Naughty') {
                naughtyCount++;
            } else if (data[month][day] === 'Nice') {
                niceCount++;
            }
        }
    }
    
    return naughtyCount > niceCount ? "Naughty!" : "Nice!";
}
