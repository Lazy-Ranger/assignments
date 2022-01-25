class Vehicles {
    constructor (name,color,cost){
        this.name = name;
        this.color = color;
        this.cost = cost;
    }
}

class Car extends Vehicles {
    constructor(name,color,cost){
        super(name,color,cost);
    }
}

class Bike extends Vehicles {
    constructor(name,type,color){
        super(name,type,color);
    }
}


const bmw = new Car('Bmw',"Black","4 lakh");


class Person {
    constructor(name,vechile){
        this.name = name;
        this.vechicle =[vechile];
    }
}



const user1 = new Person("Nitish",bmw);
console.log(user1)

console.log(user1)