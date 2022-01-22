// Write a program to find the smallest number divisible by all the numbers between 1 to 9.

function divisibleByAll(counter=1){
    let flag = true;
    for(let i =1;i<=9;i++){
        if((counter%i)!=0){
            flag =false;
            break;
        }
    }
    if(!flag){
        return divisibleByAll(++counter)
    }
    return counter;
}

const diviByAll = divisibleByAll();

console.log(divisibleByAll())