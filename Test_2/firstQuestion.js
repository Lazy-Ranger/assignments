class Storage {
    storage = [];
    save(data) {
      data._id = this.storage.length + 1;
      this.storage.push(data);
    }
  
    findAll() {
      return this.storage;
    }
  }
  
  /*
  Receipt generator
  */
  class Receipt {

    constructor(employee, customerName, cartItem, totalAmount, payableAmount) {
      this.employee = employee;
      this.customerName = customerName;
      this.cartItem = [];
      this.totalAmount = totalAmount||0;
      this.payableAmount = payableAmount||0;
    }
  }
  
  /**
   * Discount
   */
  class Discount {
  
    constructor(basePrice, discountPercentage) {
      this.basePrice = basePrice;
      this.discountPercentage = discountPercentage;
    }
  
    getDiscountedAmount() {
      const onePercentAmount = this.basePrice / 100;
  
      const discountAmount = onePercentAmount * this.discountPercentage;
  
      return this.basePrice - discountAmount;
    }
  }
  
  /**
   * Vegetable bill store
   */
  
  class VegetableBillRecord extends Storage {}
  
  const vegetableBillRecord = new VegetableBillRecord();
  
  /**
   * Vegetable Items Object
   */
  
  class VegetableItem {
    constructor(vegetableName, vegetableBasePrice, discountPercentage) {
      this.vegetableName = vegetableName;
      this.vegetableBasePrice = vegetableBasePrice;
      this.discountPercentage = discountPercentage;
    }
  }
  
  /**
   * Billing Particular Amount
   */
  
  class BilledAmountItem extends VegetableItem {
    constructor(
      vegetableName,
      vegetableBasePrice,
      discountPercentage,
      totalPrice,
      customerBoughtQuantity
    ) {
      super(vegetableName, vegetableBasePrice, discountPercentage);
      this.totalPrice = totalPrice;
      this.customerBoughtQuantity = customerBoughtQuantity;
    }
  }
  
  class VegetableBilling extends Storage {

    constructor(customerName, employee, customerType) {
      super();
      this.customerName = customerName;
      this.customerType = customerType;
      this.employee = employee;
    }
  
    addItem(item) {
      this.save(item);
  
      /**
       * Calculate when item added
       */
      this.calculateAmount();
    }
  
    getAmountReceipt() {
      return new Receipt(
        this.employee,
        this.customerName,
        this.calculateWithDiscount,
        this.getTotalAmountWithoutDiscount(),
        this.getTotalAmountWithDiscount()
      );
    }
  }
  /**
   * Vegetable Store Items
   */
  class VegetableStore extends Storage {}
  const vegetableStore = new VegetableStore();
  
  /**
   * Employee Clerk
   */
  class EmployeeStore extends Storage {}
  
  const employeeStore = new EmployeeStore();
  
  class Employee {
    
    constructor(employeeName, employeeId, gender) {
      this.employeeName = employeeName;
      this.employeeId = employeeId;
      this.gender = gender;
    }

  }
  
  /**
   * Create Vegetable Item And save to vegetable Store
   */
  const vegetable1 = new VegetableItem("Potato", 20, 2);
  const vegetable2 = new VegetableItem("Onion", 30, 5);
  const vegetable3 = new VegetableItem("Tomato", 40, 4);
  const vegetable4 = new VegetableItem("Pumpkin", 50, 10);
  
  vegetableStore.save(vegetable1);
  vegetableStore.save(vegetable2);
  vegetableStore.save(vegetable3);
  vegetableStore.save(vegetable4);
  
  // console.log(vegetableStore.findAll());
  
  /**
   * Create Employee
   */
  const emp1 = new Employee("Jhon Doe", 1, "M");
  
  const emp2 = new Employee("Bella", 2, "F");
  
  employeeStore.save(emp1);
  employeeStore.save(emp2);


//   console.log(employeeStore.findAll());
  
  /**
   * Operation of billing system
   *
   * for Customer 1
   */

//   vegetableBillRecord.save(bill2);
//   console.log(bill2.getAmountReceipt());
  
  console.log(vegetableBillRecord.findAll());