function isPalindrome(input) {
    let reversed = input.split("").reverse().join("");
    return reversed === input;
}

console.log(isPalindrome("haha"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("unitinu"));