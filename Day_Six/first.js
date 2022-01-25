class Person {
    constructor (name,address){
        this.name = name;
        this.address = address;
    }
}

class Vehicles {
    constructor(car,airCraftService){
        this.car = car || "Scorpio";
        this.airCraftService = airCraftService || "Not authorized";
    }
}

class MP extends Person {
    constructor(name,address,spendingLimit,constituency,driver,isArrested){
        super(name,address);
        this.driver = driver || "Car";
        this.isPmOrder = isArrested || false
        this.constituency = constituency;
        this.spendingLimit = spendingLimit;
    }

    getDriver (){
        return this.driver;
    }

    getConstituency (){
        return this.constituency;
    }
}

const vechile = new Vehicles()
const mp2 = new MP('Rohan','Haryana',10000,'Ambala','sandy');
mp2.vechile = vechile;

class PM extends MP { 
    constructor(name,address,spendingLimit,constituency,driver){
        super(name,address,spendingLimit,constituency)
        this.deginatedDriver = driver;
        this.isPm = true;
    }

    mpArrest(mp){
        mp.isPmOrder = true;
    }
}

const pm1 = new PM('Manmohan singh','New Delhi','100000','India','Rohan Singh');
pm1.vechicle = new Vehicles('BMW','Air India');



class Commisner {
    constructor(name,designation){
        this.name= name
        this.designation = designation;
    }

    arrestMp(mp){
        if(mp.isPmOrder && mp.speedLimit>1000000){
            return `${mp.name} is arrested`;
        }
        else {
            return `${mp.name} cannot be arrested`
        }
    }

    arrestPm(PM){
        if(PM.isPm){
            return `${PM.name} cannot be arrested`
        }
    }
}


const commisner = new Commisner('Rakesh',"Commisner");
console.log(commisner.isArrested(mp2));