// Write a program (without using inbuilt functions and not using Strings or array) to swap first and last digits of any number
// Write a program (without using inbuilt functions and not using Strings or array) to swap first and last digits of any number
function main (number){

    const m = (Math.log(number)+1)/2;
    const s = Math.floor(m-1)

    const lastDigit = number%10;
    ls = lastDigit*Math.pow(10,s);
    
    const pow = Math.pow(10,s);
    const firtdigt = number/pow;
    const fi = Math.floor(firtdigt);
    const d = Math.pow(10,s-1);
    
    const middleNum = number/10;
    const middleNums = Math.floor(middleNum);
    const powOfmiddle = (Math.log(middleNums)+1)/2;
    const res = Math.floor(powOfmiddle);
    const pows = Math.pow(10,res-1);
    const sat = (middleNums%pows);

    const me = sat*10;
    console.log(me+fi)
    
    return ls + me + fi

    }
    
const m = main(15234)
console.log(m)
    