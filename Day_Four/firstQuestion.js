class StringUtils {
    constructor(){}
    // revere vovel 
    static reverseVovel(string){
        let newStr= "";
        for (let i = 0; i< string.length; i++){
            if(string[i]==="a"){
                newStr= newStr + "u"
                continue
            }
            if(string[i]==="e"){
                newStr=newStr+"o"
                continue
            }
            if(string[i]==="o"){
                newStr=newStr+"e"
                continue
            }
            if(string[i]==="u"){
                newStr=newStr+"a"
                continue
            }
            else{
                newStr=newStr+string[i];
            }
        }
        return newStr
    }

    // reverse string

    static reverseString (string){
        let returnString = "";
        let str = string.length-1;
        while (str>=0){
            console.log(string[str])
            returnString +=string[str];
            str--;
        }
        console.log(returnString)
    }
    

    // all word contain character
    static wordContainingChar(string,T){

        let m = "";

        function chekGivenChar(str,T){

            for(let i = 0; i<str.length; i++){
                if(str[i]===T){
                    return true;
                }
            }
            return false;
        }

        for (let i = 0; i< string.length; i++){
            if(string[i]==" "){
                const resultCheckingWord = chekGivenChar(m,T);
                if(!resultCheckingWord){
                    return false
                }
                m ="";
            }
            m = m+string[i]
        }
        return true
    }

     // 1 chek character in given string
     static chekingChar(string,T){
        let flag = false;
        for (let i = 0 ; i< string.length; i++){
            if(string[i]===T){
                return flag = true;
            }
        }
        return flag
    }

    // String substring(String str,int start,int end)
    // Returns a substring from the start index to end index with all validation checks.
    static chekingChar(string,fIndex,lIndex){
        let str= "";
        for (let i = fIndex ; i <= lIndex;i++){
            if (string[i]){
                str+=string[i]
            }
        }
        return str
    }
    /* String[] split(String str,char ch)
    - Returns an array of strings broken according to the occurrence of the given character with validation checks.*/
    static joinMethod (string,sepr){
        const arr = [];
        let str ="";
        for (let i = 0 ; i<=string.length; i++){
            if(string[i]===sepr){
                arr.push(str);
                str="";
            }
            if(i === string.length){
                arr.push(str)
            }
            else{
                str+= string[i]
            }
        }
        return arr;
    }

    /*static Boolean hasPattern(String str,String pattern)
    - Returns true if the give string (pattern) found in the main string (str) otherwise false.*/

    static stringPatterCheck(string,pattern){
        const plength = pattern.length;
        let str ="";
        for(let i = 0; i <string.length-plength; i++){
            for (let j = i; j<=i+plength-1;j++){
                str+=string[j]
            }
            if(str===pattern){
                return true
            }
            str="";
        }
        return false
    }
}

const result = StringUtils.stringPatterCheck("wwww/helo/world","helo");
console.log(result)
const result2 = StringUtils.reverseVovel("wwww/helo/worle");
console.log(result2);
const result3 = StringUtils.reverseString("nitihs");
console.log(result3);
const result4 = StringUtils.joinMethod("Nitihs kumar"," ");
console.log(result4);
const result5 = StringUtils.chekingCharIndex("Nitihs kumar",1,3);
console.log(result5);
const result6 = StringUtils.chekingChar("Nitish","t");
console.log(result6)