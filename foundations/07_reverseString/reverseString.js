const reverseString = function(word) {
    let reversedWord = "";
    let character = "";
    loopLength = word.length;


    for(let i = loopLength; i > -1 ; i--){
        character = word.charAt(i);
        reversedWord += character;
    }

    return reversedWord;
};

// Do not edit below this line
module.exports = reverseString;
