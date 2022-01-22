const suduko = [["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];



function sudukValidation (suduko){

    const rowLength = suduko.length;
    const columnLength = suduko.length;

    for(let i = 0 ; i< columnLength; i++){
        const rowArr = [];
        const colArr =[];
        if(suduko[i].length!==rowLength){
            return false
        }
        for(j = 0 ; j< rowLength; j++){
            const row = suduko[i][j];
            const colums = suduko[j][i];
            
            if(row !=="."){
                const m = rowArr.some((item)=>{
                    return item == row
                })
                if(m){
                    return false
                }else{
                    rowArr.push(row)
                }
            }
            if(colums !=="."){
                const m = colArr.some((item)=>{
                    return item == colums
                })
                
                if(m){
                    return false
                }else{
                    colArr.push(colums)
                }
            }
        }
           
    }
    return true
}

const m = sudukValidation(suduko);
console.log(m)