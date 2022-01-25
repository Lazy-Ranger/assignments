/*
public class Employee
{    
    String name;  
    int salary;  
    Boolean married;
    String grade = null;
    Address address;
    List<String> mobileNumbers;
    Map<String,Object> Address;
}

public class Address
{
 String primaryAddress;
 String secondaryAddress;
 String country;
 String state;
}*/


class Employee {
    constructor(name,salary,grade,address,mobile){
        this.name= name;
        this.salary = salary;
        this.grade= grade || null;
        this.address = address,
        this.mobile = mobile
    }
}


class Address {
    constructor(primaryAdd,secondaryAdd,country,state){
        this.primaryAddress = primaryAdd;
        this.secondaryAddress= secondaryAdd;
        this.country = country;
        this.state = state;
    }
}

const noidaAddress = new Address('Noida','New Delhi','Inida','Up')
const employe1 = new Employee('Rohan',"25000k","A",noidaAddress,'9386521585');

const jsonString = {
    "name":"Rohan",
    "salary":"25000k",
    "grade":"A",
    "address":{"primaryAddress":"Noida","secondaryAddress":"New Delhi","country":"Inida","state":"Up"},
    "mobile":"9386521585"
}