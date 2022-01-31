(() => {
    let mat = [
      [1, 1, 0, 1, 1],
      [0, 0, 1, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 1, 1],
      [1, 0, 1, 1, 1],
    ];
  
    let island = 0;
  
    let opr = [
      {
        row: 0,
        col: -1,
      },
      {
        row: 0,
        col: 1,
      },
      {
        row: -1,
        col: 0,
      },
      {
        row: 1,
        col: 0,
      },
    ];
    

    for (let i = 0; i < mat.length; i++) {
      for (let j = 0; j < mat[0].length; j++) {
        if (mat[i][j] && mat[i][j] === 1) {
          mat[i][j] = null;
          findIsland(mat, i, j, [], opr);
          island++;
        }
      }
    }
  
    console.log("Island:", island);
  })();
  
  function findIsland(mat, i, j, stack, opr) {
    for (let k of opr) {
      const land = (mat[i + k.row] || [])[j + k.col];
      if (land === 1) {
        stack.push({
          row: i + k.row,
          col: j + k.col,
        });
        mat[i + k.row][j + k.col] = null;
      }
    }
    if (!stack.length) {
      return null;
    }
    const lastElem = stack.pop();
    findIsland(mat, lastElem.row, lastElem.col, stack, opr);
  }