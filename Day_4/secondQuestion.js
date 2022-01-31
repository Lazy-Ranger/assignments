/* 2. Given a string s, find the length of the longest substring without repeating characters.
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
*/


function longestString(str){
    const items = str.split("");
    let returnArr = [];
    let itemsChek = [];
    for (i = 0; i<= items.length-1;i++){
        const chekItem = itemsChek.some((item)=>{
            return item ===items[i];
        })
        if(chekItem){
            returnArr.push(itemsChek);
            itemsChek = [];
            itemsChek.push(items[i])
        }
        if(!chekItem){
            itemsChek.push(items[i])
        }
    }

    let m = 0
    let res;
    for (let k = 0; k< returnArr.length; k++){
        if(m<returnArr.length){
            res = returnArr[k]
        }
    }

    return res.join("")
}


const result = longestString("pwwkew");
console.log(result)