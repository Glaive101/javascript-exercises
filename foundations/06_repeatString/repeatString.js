const repeatString = function(word, times) {
    if(times < 0){
        return "ERROR";
    } else {
        let sentence = "";
        for(let i = 0; i < times; i++){
            sentence += word;
        }
        return sentence;
    }
        
};

// Do not edit below this line
module.exports = repeatString;
