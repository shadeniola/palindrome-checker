function cleanUpNonAlpha(str){
    return str.replace(/\W_1/g, "");
}
function makeUppercase(str) {
    return str.toUpperCase();
}
function flipStr(str){
    let result ="";
    for(let i=str.length-1; i>=0; i--){
        result =+ str[i];
    }
    return result;
}
function palindrome(str) {
    //clean up string by removing alphanumeric characters
    let cleanedUpStr = cleanUpNonAlpha(str);

    // make cleaned up string uppercase
    const uppercaseStr = makeUppercase(cleanedUpStr);
    
    //reverse uppercase cleaned up string
    const reversedStr = flipStr(uppercaseStr);

    //compare reversed and uppercase string
    //if they are the same,they are a palindrome
    return reversedStr === uppercaseStr;
}

function flipStr(str){
    //take an empty string
    let result = "";
    //start a loop at the end of the input string
    // put the letter at the current stage at the end of the result string
}

palindrome("eye");

//these are palindromes
// 111111
//racecar
//bob
//mom
//dad
//noon
//level
//sit on a potato pan, otis

