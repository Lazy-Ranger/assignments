// You are given an array of integers



(()=>{
    const arr = [2,3,4,5,6,55,66,4,66];
    let windowSize = 3
    let windowSizeCounter = windowSize;
    console.log(arr);
    console.log(`window sliding size`,windowSize);

    while (windowSizeCounter!==arr.length-1){
        let sliceArray =[];

        for (let i = windowSizeCounter-windowSize; i<windowSizeCounter; i++){
            sliceArray.push(arr[i]);
        }
        let greaterNumber = null;
        for (let j = 0 ; j< sliceArray.length;j++){
            let sliceArrayNumber = sliceArray[j];
            if(!greaterNumber){
                greaterNumber = sliceArrayNumber;
            }
            else if(greaterNumber<sliceArrayNumber){
                greaterNumber = sliceArrayNumber;
            }
        }
        console.log("Sliding window element = " , sliceArray);
        console.log("Maximum in number = ", greaterNumber);
        windowSizeCounter++
    }
})();