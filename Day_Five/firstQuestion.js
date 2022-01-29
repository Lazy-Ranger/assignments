(()=>{
  const matrix = [
      [1,2,3,4],
      [5,6,7,8],
      [9,10,11,12],
      [13,14,15,16]
  ]

  let row = matrix[0].length;
  let col = matrix.length;
  
  let rStart = 0;
  let rEnd = row - 1;
  let cStart = 0;
  let cEnd = col - 1;

  const arr =[];
  const arr2 = [];
  while (rStart <= rEnd && cStart <= cEnd)
  {
      for (let col = cStart; col <= cEnd; col++)
      {
          arr.push(matrix[rStart][col])
      }
      rStart++;

      for (let row = rStart; row <= rEnd; row++)
      {
          arr.push(matrix[row][cEnd])
      }
      cEnd--;

      for (let col = cEnd; col >= cStart; col--)
      {
          arr.push(matrix[rEnd][col])
      }
      rEnd--;

      for (let row = rEnd; row >= rStart; row--)
      {
          arr.push(matrix[row][cStart])
      }
      cStart++;
  }

  
  rStart = 0;
  rEnd = row - 1;
  cStart = 0;
  cEnd = col - 1;

  while (rStart <= rEnd && cStart <= cEnd)
  {
      for (let col = cEnd; col >= cStart; col--)
      {
          arr2.push(matrix[rStart][col])
      }
      rStart++;

      for (let row = rStart; row <= rEnd; row++)
      {
          arr2.push(matrix[row][cStart]);
      }
      cStart++;

      for (let col = cStart; col <= cEnd; col++)
      {
          arr2.push(matrix[rEnd][col])
      }
      rEnd--;

      for (let row = rEnd; row >= rStart; row--)
      {
          arr2.push(matrix[row][cEnd])
      }
      cEnd--;
  }
  console.log(arr2)

})()