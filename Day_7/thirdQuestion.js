/*
Question 3: Convert the JSON into class

{
   "firstName":"John",
   "lastName":"Smith",
   "age":25,
   "address":{
      "streetAddress":"21 2nd Street",
      "city":"New York",
      "state":"NY",
      "postalCode":10021
   },
   "phoneNumbers":[
      {
         "type":"home",
         "number":"212 555-1234"
      },
      {
         "type":"fax",
         "number":"646 555-4567"
      }
   ]
}

*/ 




    
class Person {
    constructor(firstName,lastName,age,number){
        this.firstName= firstName;
        this.lastName = lastName;
        this.age= age;
        this.phoneNumber = [];
    }
}

class Address {
    constructor(streetAddress,city,state,postalCode){
        this.streetAddress = streetAddress;
        this.city = city;
        this.state= state;
        this.postalCode = postalCode
    }
}

const address = new Address('R.nager','Noida','Up','4545')
const phone = {"type":"home","Home":"93865254545",address}
const userOne = new Person("Nitish","kumar","5","5465");
userOne.phoneNumber.push(phone);
