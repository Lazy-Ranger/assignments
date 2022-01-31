/*
Question 1: OOPs
 Create a whats app as following 

 Users having contacts and can chat with any contact

 Messaging in text audio and video 

 Users can see status of all the contacts

 User can post status

 Status can be text and image
 
 */

 /**
 * Database
 */

// class DatabaseOperation {
//     #storage = [];
//     constructor() {}
//     findAll() {
//       return this.#storage;
//     }
  
//     find() {}
  
//     save(data) {
//       this.#storage.push(data);
//     }
//   }
  
//   class Users extends DatabaseOperation {
//     constructor() {
//       super();
//     }
  
//     createUser(userObject) {
//       this.save(userObject);
//     }
//   }
  
//   const users = new Users();
  

//   class ChatBox extends DatabaseOperation {
//     constructor() {
//       super();
//     }
  
//     saveMessage(message) {
//       this.save(message);
//     }
//   }
  
//   const chatBox = new ChatBox();
  
//   /**
//    * Status Of Single user
//    */
//   class UserStatus {
//     status;
//     userId;
//     constructor(status, userId) {
//       this.status = status;
  
//       this.userId = userId;
//     }
//   }
  
//   class Status extends DatabaseOperation {
//     constructor() {
//       super();
//     }
  
//     postStatus(status) {
//       this.save(status);
//     }
//   }
  
//   const statusHub = new Status();
  
//   /**
//    * user Sign In Schema
//    */
//   class UserContact {
//     name;
//     mobileNumber;
//     _id;
//     constructor(name, mobileNumber, id) {
  
//       this._id = id;
  
//       this.name = name;
  
//       this.mobileNumber = mobileNumber;
//     }
//   }
  
//   /**
//    * Business logic
//    */
//   class Audio {
//     bin;
//     type;
//     constructor(bin) {
//       this.bin = bin;
//       this.type = "audio/mp3";
//     }
//   }

//   class Image {
//     bin;
//     type;
//     constructor(bin){
//       this.bin = bin;
//       this.t
//     }
//   }
  
//   class Video {
//     bin;
//     type;
//     constructor(bin) {
//       this.bin = bin;
//       this.type = "video/mp4";
//     }
//   }
  
//   class Text {
//     bin;
//     type;
//     constructor(bin) {
//       this.bin = bin;
//       this.type = "text/plain";
//     }
//   }
  
//   /**
//    * Messaging
//    */

//   class MessagingStrategy {
//     #message = {
//       _id: null,
//       msg: null,
//       from: null,
//       to: null,
//     };
//     constructor(message) {
//       const date = Date.now();
  
//       this.#message._id = date;
//       this.#message.msg = message;
//     }
  
//     set setFrom(userId) {
//       this.#message.from = userId;
//     }
  
//     set setTo(userId) {
//       this.#message.to = userId;
//     }
  
//     getMessage() {
//       return this.#message;
//     }
//   }
  
//   /**
//    * End of user sign In Schema
//    */
  
//   const u1 = new UserContact("Nitish", "7903034327", 1);
//   const u2 = new UserContact("Amitabh", "7250711661", 2);
//   const u3 = new UserContact("Sandeep", "7257860967", 3);
//   const u4 = new UserContact("Ajit", "9996619094", 4);
//   const u5 = new UserContact("Gandy", "9996619092", 5);
  
//   users.createUser(u1);
//   users.createUser(u2);
//   users.createUser(u3);
//   users.createUser(u4);
//   users.createUser(u5);
  
//   /**
//    * Print All Users
//    */
//   console.log("All Users Lists");
//   console.log(users.findAll());
  
//   /**
//    * Chat Section
//    *
//    * Chat Factory Function
//    */
  
//   function createMessageForUser(messageType, from, to) {
//     const message = new MessagingStrategy(messageType);
  
//     message.setFrom = from;
//     message.setTo = to;
  
//     return message;
//   }
//   /**
//    * Chat with user 1 and user 3
//    */
//   const m1 = createMessageForUser(
//     new Text("hello from u1 to u3"),
//     u1._id,
//     u3._id
//   );
    
//   console.log(m1.getMessage())
//   chatBox.saveMessage(m1.getMessage());
//   console.log(chatBox)
  
//   /**
//    * Chat with user 4 to user 3
//    */
//   const m2 = createMessageForUser(
//     new Text("hello from u4 to u2"),
//     u4._id,
//     u2._id
//   );
  

//   chatBox.saveMessage(m2.getMessage());
//   /**
//    * Chat with user 5 to 1
//    */
//   const m3 = createMessageForUser(
//     new Video("hello from u5 to u1"),
//     u5._id,
//     u1._id
//   );
  
  
//   // console.log(chatBox.findAll());
  
//   // /**
//   //  * Status By user
//   //  *
//   //  * Status Factory Function
//   //  */
//   function createStatusOfUser(status, user) {
//     return new UserStatus(status, user);
//   }
  
//   // /**
//   //  * Status Posts
//   //  */
//   const st = createStatusOfUser(new Video("VideoPath"), u2._id);
//   const st1 = createStatusOfUser(new Text("My World"), u1._id);
  
//   statusHub.postStatus(st);
//   statusHub.postStatus(st1);
  
//   console.log("\nAll Status Of Users");
//   console.log(statusHub.findAll());


class Setting {
  constructor(){}

  accountSetting(){}

  chatSetting(){}

  notificationSetting(){}

}


class User extends Setting{
  constructor(name,id,phoneNumber){
  super()
    this.name= name;
    this._id = id;
    this.contacts =[]
    this.phoneNumber = phoneNumber;
    this.chat = [];
    this.status =[];
    this.group = [];
  }


  addContacts(contact){
    this.contacts.push(contact)
  }

  delteContact(contact_id){
    this.contacts.forEach((item,index)=>{
      if(item._id===contact_id){
        this.contacts.splice(index,1)
      }
    })
  }

  addGroup(listOfgroup){
    this.group.push(listOfgroup)
  } 

}

class Contact {
constructor(_id,name,image,about){
  this._id = _id,
  this.name = name;
  this.listStatus = [];
  this.image = image;
  this.about = about;
}
}

class Chat {
constructor(_id,senderId,message){
  this._id= _id;
  this.senderId=senderId;
  this.message = message;
}
}


// Message 

class Audio {

  constructor(bin) {
    this.bin = bin;
    this.type = "audio/mp3";
  }
}

class Image {
  
  constructor(bin){
    this.bin = bin;
    this.type ="image"
  }
}

class Video {
  
  constructor(bin) {
    this.bin = bin;
    this.type = "video/mp4";
  }
}

class Text {

  constructor(bin) {
    this.bin = bin;
    this.type = "text/plain";
  }

}

// Message Strategy


class MessagingStrategy {

  constructor(message) {
    const date = Date.now();
    this._id = date;
    this.message = message;
    this.messageFrom;
    this.messageTo;
  }

  set setFrom(userId) {
    this.messageFrom = userId;
  }

  set setTo(userId) {
    this.messageTo = userId;
  }

  getMessage() {
    return this.message;
  }
}

function createMessageForUser(messageType, from, to) {
  const message = new MessagingStrategy(messageType);

  message.setFrom = from;
  message.setTo = to;

  return message;
}


function createStatusUser(StatusType,value){
    const status = new StatusType(value);

    return status;
}


const userOne = new User("Nitish",1,9386521585);
const UserTwo = new User ('Amit',2,852365485);




const messageOne = createMessageForUser(
      new Text("hello from u1 to u3"),
      userOne._id,
      UserTwo._id
);

const statusOne= createStatusUser(Video,"helolo");


userOne.contacts.push(UserTwo);
userOne.chat.push(messageOne);
userOne.status.push(statusOne);






