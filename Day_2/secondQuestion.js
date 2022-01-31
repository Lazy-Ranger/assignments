/* i) Write a function that takes in a non-empty array of distinct integers and an
integer representing a target sum. The function should find all triplets in the array 
that sum up to the target sum and return a two-dimensional array of all these triplets. 
The numbers in each triplet should be ordered in ascending order, and the triplets themselves should
be ordered in ascending order with respect */


function sumOfTargetNum (arr,target){
    
    const sortArr = arr.sort((a,b)=>{
        return a-b;
    })

    let returnArr = [];
    for (let i = 0 ; i < sortArr.length-2; i++){
        let a = sortArr[i];
        let b = sortArr[i+1];
        for (let j = i; j<sortArr.length-1;j++){
            let trisum =[];
            if(sortArr[j]>=a || sortArr[j]>=b){
                let s = a+b+sortArr[j];
                if(s===target){
                    trisum.push(a);
                    trisum.push(b);
                    trisum.push(sortArr[j])
                }  
                if(trisum.length === 3){
                    returnArr.push(trisum)
                }
            }
        }

    }
    return returnArr
}


const result = sumOfTargetNum([9,8,7,6,4,3,2,1,11,12,13,15],10);
console.log(result)