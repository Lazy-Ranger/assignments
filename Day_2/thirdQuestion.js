function main(num){
    for(let i = 0;i<num;i++){
        let str =""
        for (let j = 0; j<num ; j++){
            if(i === j){
               str= str+"\\";
            }
            else if(i === num-j){
               str= str+"/"
            }
            else{
            str = str+ "*"
        }
        }
        console.log(str)
    }
}

main(7)