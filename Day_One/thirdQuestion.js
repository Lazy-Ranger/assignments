// Find the largest number less than N whose each digit is prime number

function main (number){
    const arr = [3,5,7]
    nums =""
    let myFunc = num => Number(num);

    while (number>=0){
    let intArr = Array.from(String(number),myFunc);  
        const filter = intArr.map((item)=>{
           return arr.includes(item)
        })

       const set=  filter.every((item)=>{
         return  item === true;
       })
       if(set){
           const m = intArr.join("");
            return m;
            break
       }
        number--;
    }
}

const st = main(55)
console.log(st)