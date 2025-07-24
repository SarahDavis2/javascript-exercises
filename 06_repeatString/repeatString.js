const repeatString = function(string, num) {
    if (num < 0) return "ERROR";

    let returnStr = "";
    for (let i = 0; i < num; i++) {
        returnStr += string;
    }

    return returnStr;
};

// Do not edit below this line
module.exports = repeatString;
