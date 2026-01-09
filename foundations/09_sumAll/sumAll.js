const sumAll = function(first, second) {
    let sum = 0;
    let start = 0; 
    let end = 0;

    if(first < 0 || second < 0) return "ERROR";
    if(!Number.isInteger(first) || !Number.isInteger(second)) return "ERROR";

    if(first < second){
        start = first;
        end = second;
    } else {
        start = second;
        end = first;
    }
    console.log(`Start: ${start}, End: ${end}`);

    for(let i = start; i <= end; i++){
        //console.log(`Current sum value: ${sum}`);
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
