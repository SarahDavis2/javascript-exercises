const palindromes = function (str) {
    let isPalindrome = true;

    str = str.toLowerCase();
    // Remove symbols and punctuation and spaces
    str = str.replace(/[^a-z0-9]/g, ''); 
    
    for (let count = 0; count < str.length; count++) {
        if (str.at(count) != str.at(-count - 1)) {
            isPalindrome = false;
        }
    }

    return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
