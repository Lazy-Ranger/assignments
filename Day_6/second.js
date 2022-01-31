// class Inverter {
//     constructor(name,rating){
//         this.name= name;
//         this.rating = rating;
//     }
// }

// class SolarInverter extends Inverter {
//     constructor(name,rating,grid){
//         super(name,rating)
//         this.solarPannel = true;
//         this.grid = grid
//     }
// }

// class SolarBatteryInverter extends SolarInverter {
//     constructor(name,rating,solarPannel,grid){
//         super(name,rating,solarPannel,grid)
//         this.isBattery = true;
//     }
// }

// class NonBatterySolarInverter extends SolarInverter{
//     constructor(name,rating,companyName,solarPannel,grid){
//         super(name,rating,companyName,solarPannel,grid)
//         this.isBattery = false;
//     }
// }

// class NonSolarInverter extends Inverter {
//     constructor(name,rating){
//         super(name,rating);
//         this.battery = true
//     }
// }


// const inverterThree = new NonSolarInverter('Zelio','3',)
// console.log(inverterThree)
// const inverterOne = new SolarBatteryInverter('PCU',"4",false);
// const inverterTwo = new NonBatterySolarInverter('GTI',"5",true);
// // console.log(InverterTwo)
// // console.log(InverterOne)




class Inverter {
    constructor(name,rating){
        this.name= name;
        this.rating = rating;
    }
}

class SolarInveter extends Inverter {

    constructor(name,rating){
        super(name,rating);
        this.solarPanels = true;
    }
}

class GTI extends SolarInveter {
    constructor(name,rating){
        super(name,rating)
        this.battery = false;
        this.grid = true;
    }
}

class PCU extends SolarInveter{
    constructor(name,rating){
        super(name,rating);
        this.battery= true;
        this.grid = true;
    }
}

class Rabilia extends SolarInveter{
    constructor(name,rating){
        super(name,rating)
    }
}

class NonSolarInvter extends Inverter{
    constructor(name,rating){
        super(name,rating)
        this.battery = true
    }
}
