const leapYears = function(year) {
    const isDivisibleByFour = year % 4 === 0;
    const isCentury = year % 100 === 0;
    const isDivisibleByFourHundred = year % 400 === 0;

    let isLeapYr = false;
    if (
        ((isDivisibleByFour) && !(isCentury))
        || isDivisibleByFourHundred
    ) isLeapYr = true;

    return isLeapYr;
};

// Do not edit below this line
module.exports = leapYears;
