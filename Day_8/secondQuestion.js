
class Atm {
    constructor(twoThousand,fiveHundredNote,towHundred,oneHundred){
        this.twoThousandNote = twoThousand,
        this.fiveHundredNote= fiveHundredNote,
        this.towHundred = towHundred,
        this.oneHundred = oneHundred
    }
}

const OneAtm = new Atm(20,50,3,1);

console.log(OneAtm)

let m = 5;

while (m>0){
    console.log(m);
    m--;
}