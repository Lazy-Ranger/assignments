/* Task 1 :
Intent: user can paint brick in his/her city wall with caption, message and dedicate to someone on Valentine's day. 
> Anyone can read content of brick.

> Anyone can comment on it.

> Use cases:

> Brick: Every country has n number of cities and every city can have 1 to n number of walls.

> 1 wall can have max of 90 bricks. 2nd wall would be only initiated once all bricks of 1st wall will be occupied.

> A brick can be only owned by a single guy..

> When owner visits on his/her city wall then his brick should animate.

> Need to find out total number of walls initiated, total number of bricks initiated in specific wall.

> Admin can edit any brick whereas user can edit only his/her brick.

> If more than 10 bricks would be flagged then brick would be in invisible mode.

An owner can dedicate more than one brick to express his/ her love to more than one person whereas a specific brick can be only owned by one person.

Find out hottest guy or girl that received max number of bricks.

Find out the guy or girl that don't get any dedication.

You can input 10 users from command line. Whole project should be able to run through command line.

*/

class Storage {
    #storage = new Array();

    save(item){
        item._id = this.#storage.length+1;
    }
    findAll(){
        return this.#storage
    }
}

// Note Strategy

class NoteStrategyStore extends Storage{};
const noteStratedyStore = new NoteStrategyStore();

// Define Notes

class Notes {
    noteValue;
    avalable;
    constructor(noteValue,avalable){
        this.noteValue = noteValue;
        this.avalable = avalable
    }
}

// Create in Atm 

const note1 = new Notes(2000,true);
const note2 = new Notes(500,true);
const note3 = new Notes(200,true);
const note4 = new Notes(100,true);


noteStratedyStore.save(note1);
noteStratedyStore.save(note2);
noteStratedyStore.save(note3);
noteStratedyStore.save(note4);

console.log(noteStratedyStore.findAll())
