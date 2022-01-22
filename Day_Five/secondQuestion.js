/*2. Write a program to print all the possible combinations according to the input values.
Example :
Given Values
'1' : ['Z', 'Y', 'A'],
'2' : ['B', 'O'],
'12' : ['L']
'3' : ['U', 'P']

Input : 123
Output : [ZBU, ZBP, ZOU, ZOP, YBU, YBP, YOU, YOP, ABU, ABP, AOU, AOP, LU, LP]
*/



function possibleComb(first,second,third,fourth) {

    if(fourth==undefined){
        fourth = 0;
    }if(second == undefined){
        second = 0;
    }
    if(third == undefined){
        third = 0;
    }
    let returnArr = [];

    for (let i = 0 ; i <first.length; i++){
        let firstChar = first[i];
        if(second.length==0||second==0){
             returnArr.push(firstChar);
        }
        else if(second.length>0){
            for (let j = 0; j<second.length ; j++){
                let secondChar = firstChar+second[j];
                if(third.length===0 || third===0){
                     returnArr.push(secondChar)
                }
                else if(third.length>0){
                    for (let k = 0; k <third.length;k++){
                        let thirdChar = secondChar+third[k];
                        if(fourth.length===0||fourth===0){
                            returnArr.push(thirdChar);
                        }
                        if(fourth.length>0){
                            for(let m = 0; m< fourth; m++){
                                const fourthChar = thirdChar+fourth[m];
                                returnArr.push(fourthChar)
                            }
                        }
                    }
                }
            }
        }

    }

    return returnArr

}



(()=>{

    let a =["Z","Y","A"];
    let b =["B","O"];
    let c =["L"];
    let d =["U","P"];

    const result= possibleComb(a,b,c);
    console.log(result)
})()