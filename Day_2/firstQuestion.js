// i) Write a program to remove duplicate values from an array and returns an array of unique values. int[] removeDuplicates(int[]values)


function removeDublicateItem(array){

    uniqueArray = array.filter((item,index)=>
     {
       console.log(item);
         console.log(array.indexOf(item));
         console.log(index)
        return array.indexOf(item) == index;
    })

    return uniqueArray;

}


const result = removeDublicateItem([1,3,3,5,4,5,6,3,7,8]);

console.log(result)