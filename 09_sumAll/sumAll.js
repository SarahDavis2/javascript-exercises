const sumAll = function(start, end) {
    // Error checks if not number or negative
    if (!Number.isInteger(end) 
        || !Number.isInteger(start)
        || start < 0
        || end < 0
    ) return "ERROR";
    
    // Swap for iterator
    if (start > end) [start, end] = [end, start];

    let sum = 0;s
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
