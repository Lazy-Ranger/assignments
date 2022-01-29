class ATM {

    twoThousand = 2000;
    fiveHundred = 500;
    twoHundred = 200;
    hundred = 100;

    constructor(totalAmout,twoThousand,fiveHundred,twoHundred,hundred){
        this.totalAmout = totalAmout||0;
        this.twoThousand= twoThousand||0;
        this.fiveHundred = fiveHundred||0;
        this.hundred = hundred||0;
        this.twoHundred = twoHundred||0
    }

    checkAvabilityCash(amount){
       
        if(this.twoThousand && amount/2000 >= 1){
        
            
        }
    
    }

    withrowMoney(amount){
        if(amount>this.totalAmout){
            return `insufficient balance`;
        }
    this.checkAvabilityCash(amount)       

    }

}



const newAtm = new ATM(41000,20,5);

const result = newAtm.withrowMoney(1000);
console.log(result)