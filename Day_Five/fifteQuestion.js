function rotate(matrix) {
    const n = matrix.length;
    const x = Math.floor(n/ 2);
    console.log(x)
    const y = n - 1;
    console.log(y)
    for (let i = 0; i < x; i++) {
       for (let j = i; j < y - i; j++) {
          k = matrix[i][j];
          matrix[i][j] = matrix[y - j][i];
          matrix[y - j][i] = matrix[y - i][y - j];
          matrix[y - i][y - j] = matrix[j][y - i]
          matrix[j][y - i] = k
       }
    }
    return matrix;
  }


const result = rotate([[1,2,3],[4,5,6],[7,8,9]])
console.log(result)