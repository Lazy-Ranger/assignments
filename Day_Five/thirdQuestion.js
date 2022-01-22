/* 3. Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-104 <= matrix[i][j], target < */

function  checkMatrix(matrix,rowLength,xQuad,target) {

    for (let j = 0; j< rowLength ; j++){
        if(matrix[xQuad][j]<=-10000){
            return false
        }
        if(target == matrix[xQuad][j]){
            return true;
        }
    }
    return false
}


function targetCheck(matrix,target){

    if(target>10000){
        return false;
    }

    let m = matrix.length;
    if(!(1<m)){
        return false;
    }


    for (let i = 0 ; i < m; i++){
        let rowLength = matrix[i].length-1;
        if(rowLength >100 ){
            return false;
        }
        let x = matrix[i][0];
        let y = matrix[i][rowLength];

        if(x<target && y>target){
           const result = checkMatrix(matrix,rowLength,i,target);
           if(result){
               return true
           }
        }
    }

    return false;

}


(()=>{

    let  matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
    let target = 11;

  const result =  targetCheck(matrix,target);
  console.log(result)

})()