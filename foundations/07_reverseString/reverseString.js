const reverseString = function(word) {
    let reversedWord = "";
    let character = "";
    loopLength = word.length;


    for(let i = loopLength - 1; i >= 0 ; i--){
        character = word.charAt(i);
        reversedWord += character;
    }

    return reversedWord;
};

// Do not edit below this line
module.exports = reverseString;