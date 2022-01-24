
function interleavingString(string){

    // Convet string into array.
    const arr = Array.from(string);

    // Sorting the array.

    const iterateArr = arr.sort();
    let subStrings = []

    let regFirstChar = iterateArr[0];
    let regSecondChar = iterateArr[1];

    for (let i = 2;i<iterateArr.length;i++){
        let temp =""
        for (let j = i; j <iterateArr.length;j++){
            temp =  temp + iterateArr[j]
        }
        const formedString  = regFirstChar + regSecondChar + temp;

        subStrings.push(formedString)
    }
    // return subStrings;
    return subStrings
}   



(()=>{
    let str = "MNOPABCDEFGHIJKL";
    const result = interleavingString(str)
    console.log(result)
})()