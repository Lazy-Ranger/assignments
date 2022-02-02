/*As described task is:

You have to create a program for ATM Which would have certain defined denominations of notes : 100 ,200, 500, and 2000 INR.

Now you have to design your ATM in such a way that at any time ATM can be top-up with any required domination like I can add 41000 as (2000 x 20) + (500 x 2) notes

Your ATM should have a function to withdraw cash , input can be any amount:

Use cases for withdraw as below:

1: if amount is not present show error insufficient balance

2: if amount is not in the factor of available denominations show error to ask for multiple of available denomination

3: first largest denomination should be used than smaller : like if I opt for 2300 rs, amount dispatched should be (2000 x 1 ) + (200 x 1) + (100 x 1)

3.b: if any denomination is not there like suppose you don’t have 2000 notes left in ATM , then, amount dispatched should be (500 x 4) +  (200 x 1) + (100 x 1)


Next step: it can be done by Modi Ji, that older denomination is not valid in case of demonetization, like 2000 Notes are banned and new 5000 notes are legal , so you code should be like you don’t need to change much of it, 

Try to achieve OOPS , and SOLID principles as much as you can, 

Also, we will add new use cases to see whether your system can adapt to those changes. If Not, then your design is bad. (SOLID,TRY,YAGNI,KISS)

*/


// function checkNotes(obj){
//     const arr =[];
//     if(obj.oneHundred){
//         arr.push(100)
//     }
//     if(obj.twoHundred){
//         arr.push(200)
//     }
//     if(obj.fiveHundred){
//         arr.push(500)
//     }
//     if(obj.twoThousand){
//         arr.push(2000)
//     }
//     return arr;
// }


// function UpdateNotes(obj,note,num){
//     if(note === 2000){
//         obj.twoThousand = obj.twoThousand-num;
//         return
//     }
//     if(note ===500){
//         obj.fiveHundred = obj.fiveHundred-num;
//         return
//     }
//     if(note ===200){
//         obj.twoHundred = obj.twoHundred-num;
//         return
//     }
//     if(note ===100){
//         obj.oneHundred = obj.oneHundred-num
//         return
//     }
// }


// function chekNumbeOfnote(store,note,demandNote){
//     if(note===2000 && store.twoThousand>demandNote){
//         return true
//     }
//     if(note === 500 && store.fiveHundred>demandNote){
//         return true
//     }
//     if(note === 200 && store.twoHundred>demandNote){
//         return true
//     }
//     if(note === 100 && store.oneHundred>demandNote){
//         return true
//     }
//     return false 
// }


// class AtmStore {
//     constructor(twoThousand,fiveHundred,twoHundred,oneHundred,totalAmount){
//         this.twoThousand = twoThousand,
//         this.fiveHundred = fiveHundred,
//         this.twoHundred = twoHundred,
//         this.oneHundred = oneHundred,
//         this.totalAmount = totalAmount
//     }

// }

// const atmStore = new AtmStore(20,2,3,5,41000);


// class Atm {
//     constructor(){
//         this.atmStore = atmStore;
//     }

//     cashWithrow(amount){
//         if(amount>this.atmStore.totalAmount){
//             return `insufficient balance`
//         }
//         const notesAvailable = checkNotes(this.atmStore);

//         if(amount%notesAvailable[0] !==0){
//             let str ='Please Enter multiple of available denomination that is '
//             notesAvailable.forEach((item,index)=>{
//                 str+=`${item} `;
//             })
//             return str
//         }

//         const arr=[];
//         let returnMoney = {};
//         let demandMoney = amount;
//         for (let i = notesAvailable.length-1;i>=0;i--){
//             const num = demandMoney/notesAvailable[i];
//             const num2 = Math.floor(num);
//             const isNoteAvailble = chekNumbeOfnote(this.atmStore,notesAvailable[i],num2);
//             if(!isNoteAvailble){
//                 return `${notesAvailable[i]} note is note available`
//             }
//             if(num2>0){
//                 arr.push(notesAvailable[i])
//                 arr.push(num2)
//             }
//             UpdateNotes(this.atmStore,notesAvailable[i],num2)
//            demandMoney = demandMoney - notesAvailable[i]*num2
//         }
//         this.atmStore.totalAmount = this.atmStore.totalAmount - amount;
//         console.log(this.atmStore)
//         for (let i = 1; i< arr.length+1;i+=2 ){
//              returnMoney[arr[i-1]] =arr[i]   
//         }

//         return returnMoney
//     }
// }

// const atm = new Atm();

// const result = atm.cashWithrow(2200);
// console.log(result)

// --------------------------------


function chekNumbeOfnote(arrayOfnotes,note,numberOfdemandnote){
    const valid =  arrayOfnotes.some((item)=>{
         if(item.noteValue===note && item.numberOfNotes>numberOfdemandnote){
             return true
         }
     })
     return valid
 }
 
 function updateNotes (arrayOfnotes,note,demandedNotes){
    arrayOfnotes.forEach((items)=>{
        if(items.noteValue===note){
            items.numberOfNotes = items.numberOfNotes - demandedNotes
        }
    })
 }
 
 
 
 class Storage {
     #Storage = new Array()
     save(item){
         item._id = this.#Storage.length+1;
         this.#Storage.push(item)
     }
 
     findAll (){
         return this.#Storage;
     }
 }
 
 
 class NotesStrategyStore extends Storage {}
 const noteStratedyStore = new NotesStrategyStore();
 
 class Notes {
     noteValue;
     available;
     constructor(noteValue,available,numberOfNotes){
         this.noteValue =noteValue;
         this.available = available;
         this.numberOfNotes = numberOfNotes
     }
 }
 
 const noteOne = new Notes(2000,true,50);
 const noteTwo = new Notes(500,true,40);
 const noteThree = new Notes(200,true,30);
 const noteFour = new Notes(100,true,20);
 
 noteStratedyStore.save(noteOne);
 noteStratedyStore.save(noteTwo);
 noteStratedyStore.save(noteThree);
 noteStratedyStore.save(noteFour);
 
 
 class ATM {
     #notes = noteStratedyStore.findAll()
     constructor(){
         this.total=0;
     }
     getTotal (){
         this.#notes.forEach(element => {
             this.total += element.noteValue*element.numberOfNotes;
         });
         
     }
 
     cashWithrowal (amount){
         if(amount>this.total){
             return `Insuficient balance`
         }
         const availableNotes = [];
          this.#notes.forEach(element => {
             if(element.numberOfNotes&& element.available){
                 availableNotes.push(element.noteValue)
             }
         });
          
         availableNotes.sort(function(a, b){return a - b});
         
         if(amount%availableNotes[0] !==0){
                 let str ='Please Enter multiple of available denomination that is '
                 availableNotes.forEach((item,index)=>{
                 str+=`${item} `;
                 })
             return str
         }
         // 
         const arr=[];
                 let returnMoney = {};
                 let demandMoney = amount;
                 for (let i = availableNotes.length-1;i>=0;i--){
                     const num = demandMoney/availableNotes[i];
                     const numberOfNotes = Math.floor(num);
                 
                     
                     const isNoteAvailble = chekNumbeOfnote(this.#notes,availableNotes[i],numberOfNotes);
                     if(!isNoteAvailble){
                         return `${availableNotes[i]} note is note available`
                     }
                     if(numberOfNotes>0){
                         arr.push(availableNotes[i])
                         arr.push(numberOfNotes)
                     }
                     updateNotes(this.#notes,availableNotes[i],numberOfNotes)
                    demandMoney = demandMoney - availableNotes[i]*numberOfNotes
                 }
                 this.total = this.total - amount;
                 console.log(this.total)
                 for (let i = 1; i< arr.length+1;i+=2 ){
                      returnMoney[arr[i-1]] =arr[i]   
                 }
         
                 return returnMoney
     }
 }
 
 
 function createATM (){
     const result = new ATM()
     result.getTotal();
     return result
 }
 
 const oneAtm = createATM();
 
 const result = oneAtm.cashWithrowal(1000)
 console.log(result)