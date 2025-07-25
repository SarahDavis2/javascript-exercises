const removeFromArray = function(arr, ...removeArgs) {
    return arr.filter(item => !removeArgs.includes(item))
};

// Do not edit below this line
module.exports = removeFromArray;
