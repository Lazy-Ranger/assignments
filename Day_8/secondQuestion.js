function checkNotes(obj){
    const arr =[];
    if(obj.oneHundred){
        arr.push(100)
    }
    if(obj.twoHundred){
        arr.push(200)
    }
    if(obj.fiveHundred){
        arr.push(500)
    }
    if(obj.twoThousand){
        arr.push(2000)
    }
    return arr;
}


function UpdateNotes(obj,note,num){
    if(note === 2000){
        obj.twoThousand = obj.twoThousand-num;
        return
    }
    if(note ===500){
        obj.fiveHundred = obj.fiveHundred-num;
        return
    }
    if(note ===200){
        obj.twoHundred = obj.twoHundred-num;
        return
    }
    if(note ===100){
        obj.oneHundred = obj.oneHundred-num
        return
    }
}


function chekNumbeOfnote(store,note,demandNote){
    if(note===2000 && store.twoThousand>demandNote){
        return true
    }
    if(note === 500 && store.fiveHundred>demandNote){
        return true
    }
    if(note === 200 && store.twoHundred>demandNote){
        return true
    }
    if(note === 100 && store.oneHundred>demandNote){
        return true
    }
    return false 
}


class AtmStore {
    constructor(twoThousand,fiveHundred,twoHundred,oneHundred,totalAmount){
        this.twoThousand = twoThousand,
        this.fiveHundred = fiveHundred,
        this.twoHundred = twoHundred,
        this.oneHundred = oneHundred,
        this.totalAmount = totalAmount
    }

}

const atmStore = new AtmStore(20,2,3,5,41000);


class Atm {
    constructor(){
        this.atmStore = atmStore;
    }

    cashWithrow(amount){
        if(amount>this.atmStore.totalAmount){
            return `insufficient balance`
        }
        const notesAvailable = checkNotes(this.atmStore);
        if(amount%notesAvailable[0] !==0){
            let str ='Please Enter multiple of available denomination that is '
            notesAvailable.forEach((item,index)=>{
                str+=`${item} `;
            })
            return str
        }

        const arr=[];
        let returnMoney = {};
        let demandMoney = amount;
        for (let i = notesAvailable.length-1;i>=0;i--){
            const num = demandMoney/notesAvailable[i];
            const num2 = Math.floor(num);
            const isNoteAvailble = chekNumbeOfnote(this.atmStore,notesAvailable[i],num2);
            if(!isNoteAvailble){
                return `${notesAvailable[i]} note is note available`
            }
            if(num2>0){
                arr.push(notesAvailable[i])
                arr.push(num2)
            }
            UpdateNotes(this.atmStore,notesAvailable[i],num2)
           demandMoney = demandMoney - notesAvailable[i]*num2
        }
        this.atmStore.totalAmount = this.atmStore.totalAmount - amount;
    
        for (let i = 1; i< arr.length+1;i+=2 ){
             returnMoney[arr[i-1]] =arr[i]   
        }

        return returnMoney
    }
}

const atm = new Atm();

const result = atm.cashWithrow(2300);
console.log(result)