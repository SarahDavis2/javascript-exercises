const removeFromArray = function(arr, ...removeArgs) {
    return arr.filter( (item) => {
        let addToFlag = true;
        for (let arg of removeArgs) {
            if (item === arg) {
                addToFlag = false;
                break;
            }    
        }

        return addToFlag;
    });
};

// Do not edit below this line
module.exports = removeFromArray;
