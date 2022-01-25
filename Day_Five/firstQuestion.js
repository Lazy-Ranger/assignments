/*Question = 1. Write a method void printArray(int[][]arr)
 Prints array elements clock wise and anti-clockwise alternatively.
Input : 
 1 2 3
 4 5 6
 7 8 9
Output :
1 2 3 6 9 8 7 4 5
3 2 1 4 7 8 9 6 5 */

(() => {
  let mat = [
    [1, 2, 3], //02
    [4, 5, 6], //12
    [7, 8, 9], //22
  ];

  console.log("Clockwise: ");
  clockWise(mat);
  console.log("Anti Clockwise: ");
  antiClockwise(mat);
})();

function clockWise(mat) {
  counter = 0;
  while (counter !== mat[0].length - 1) {
    for (let j = counter; j <= mat[0].length - 1 - counter; j++) {
      console.log(mat[counter][j]);
    }

    for (let i = 1; i <= mat[0].length - 1 - counter; i++) {
      if (i !== counter) {
        console.log(mat[i][mat[0].length - 1 - counter]);
      }
    }

    for (let k = mat[0].length - 1 - counter; k >= counter; k--) {
      if (k !== counter) {
        console.log(mat[mat[0].length - 1 - counter][k - 1] || "");
      }
    }

    for (let l = counter + 1; l < mat[0].length - 1; l++) {
      console.log((mat[mat[0].length - 1 - counter - l] || [])[0] || "");
    }
    counter++;
  }
}

function antiClockwise(mat) {
  counter = 0;
  while (counter !== mat[0].length - 1) {
    for (let j = counter; j < mat[0].length; j++) {
      console.log(mat[counter][mat[0].length - 1 - j + counter] || "");
    }
    for (let i = counter + 1; i <= mat[0].length - 1 - counter; i++) {
      if (i !== counter) {
        console.log(mat[i][counter]);
      }
    }
    for (let k = counter + 1; k <= mat[0].length - 1 - counter; k++) {
      if (k !== counter) {
        console.log(mat[mat[0].length - 1][k] || "");
      }
    }
    for (let l = counter + 1; l < mat[0].length - 1; l++) {
      console.log((mat[l] || [])[mat[0].length - 1 - counter] || "");
    }

    counter++;
  }
}
