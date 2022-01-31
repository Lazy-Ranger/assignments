class Driver {
    constructor(name,vehicle){
        this.name = name;
        this.vehicle= vehicle;
    }
}

const driverOne = new Driver('Rohan','Scorpio');

const spendingLimit = {
    pmSpendingLimt : 10000000,
    mpSpendingLimit :100000,
    minister: 1000000
}



class MP {
    constructor(name,constituency,driver,spendAmount,role,spendingLimit){
        this.name = name;
        this.constituency = constituency;
        this.driver = driver||"Ambesder";
        this.spendingLimit = spendingLimit
        this.spendAmount = spendAmount;
        this.role = role;
    }
    getConstituency(){
        return `${this.constituency}`
    }
    getDriver(){
        return `${this.driver}`
    }
}

// MP

const mpOne = new MP('Rakesh','Noida',driverOne,150000000000000,"MP",spendingLimit.mpSpendingLimit);
console.log(mpOne instanceof MP)



class Minister extends MP {
    constructor(name,constituency,driver,spendAmount,role,spendingLimit){
        super(name,constituency,driver,spendAmount,role,spendingLimit);    
    }
}

const ministerOne = new Minister('Nitish','Noida',driverOne,1800000000000,"MP",spendingLimit.minister);


class PM extends  Minister {
    constructor(name,constituency,driver,spendAmount,role,spendingLimit,airCraft){
        super(name,constituency,driver,spendAmount,role,spendingLimit);
        this.airCraft = airCraft;
    }

    getPermission(minister){

        if(minister.spendAmount > spendingLimit){
            return true
        }
        else{
            return false
        }
    }

}


const pm = new PM('Manmohan',"New Delhi",driverOne,15555555,'PM',spendingLimit.pmSpendingLimt,"Air India");


class Commisner {
    constructor(name,designation){
        this.name = name;
        this.designation = designation;
    }

    getArrest(leaders){

        if(leaders.role === 'MP' && leaders.spendAmount > leaders.spendingLimit){
            return true
        }

        if(leaders.role ==='Minister' && pm.getPermission(leaders)){
            return true
        }
        if(MP.role == 'PM'){
            return false
        }
        else{
            return false
        }
    }
}

const commisner  = new Commisner('Rathor',"Commisner");
const result = commisner.getArrest(mpOne);
const result2 = commisner.getArrest(ministerOne);
