// Box Class

class Box {
    constructor(length,height,width,flute, pin,isStitch,pasting){
        this.length= length;
        this.height=height;
        this.width = width;
        this.area,
        this.flute=flute;
        this.stitchingCost = pin*10||undefined;
        this.isStitch = isStitch||false
        this.pasting = pasting
    }

    area(){
        this.area = this.length*this.width*this.height;
    }

    costOfBox(){
        let cost;
        if(this.isStitch){
            cost = this.area*this.flute.totalGSM*this.stitchingCost;
        }
        else{
            cost = this.area*this.flute.totalGSM*this.pasting
            console.log(cost);
        }
        return cost
    }

}


// Five Boxes Class

class Universal extends Box {
    constructor(length,height,width,flute, pin,isStitch,pasting){
        super(length,height,width,flute, pin,isStitch,20);
    }
}


class AllFlapMeeting extends Box{
    constructor(length,height,width,flute,pin,isStitch,pasting){
        super(length,height,width,flute,pin,isStitch,30)
    }
}

class HoneyComb extends Box{
    constructor(length,height,width,flute,pin,isStitch,pasting){
        super(length,height,width,flute,pin,isStitch,40)
    }
}

class ReverseTuckIn extends Box{
    constructor(length,height,width,flute, pin,isStitch,pasting){
        super(length,height,width,flute,pin,isStitch,40)
    }
}

class TopOpeningSnapLock extends Box{
    constructor(length,height,width,flute, pin,isStitch,pasting){
        super(length,height,width,flute,pin,isStitch,40)
    }
}



// Flutes

// Flue Property

class FluteProperty {
    constructor(gsm,extraGSM){
        this.GSM = gsm;
        this.extraGSM = extraGSM,
        this.totalGSM;
    }

    totalGSM (){
        this.totalGSM= this.extraGSM+this.GSM*100;
    }
}

class AFlute extends FluteProperty{
    constructor(gsm,extraGSM){
        super(gsm,10);
    }
} 

class BFlute extends FluteProperty{
    constructor(gsm,extraGsm){
        super(gsm,30);
    }
} 

class CFlute extends FluteProperty{
    constructor(gsm,extraGsm){
        super(gsm,20);
    }
} 


class EFlute extends FluteProperty{
    constructor(gsm,extraGsm){
        super(gsm,40)
    }
}

class FFlute extends FluteProperty{
    constructor(gsm,extraGsm){
        super(gsm,50)
    }
}


class GFlute extends FluteProperty{
    constructor(gsm,extraGsm){
        super(gsm,20)
    }
}

// Factory Function

function createFlute (fluteClass,GSMvalue){
    const result = new fluteClass(GSMvalue)
    result.totalGSM();
    return result;    
}

const aFlute = createFlute(AFlute,40);

// create Boxes

// Parmeters
// length , height , width ,width,flute, pin,isStitch,pasting){


function createBox (BoxClass, length, height, width , flute, pin, isStitch){

    const box = new BoxClass(length, height, width , flute, pin,isStitch);

    box.area();

    return box;

}

const universalOne = createBox(Universal,10,10,10,aFlute,5);

console.log(universalOne)

console.log(universalOne.costOfBox())