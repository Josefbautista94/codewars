multiplicationTable = function(size) {
  let table = []
  for (let i=0; i<size; i++) {
      let row = []
      for (let j=0; j<size; j++) {
        row.push((i+1) * (j+1))
      }
      table.push(row)
  }
  return table
}