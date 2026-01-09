const removeFromArray = function(array, ...itemsToRemove) {
    const filteredArray = array.filter(item => !itemsToRemove.includes(item));
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
