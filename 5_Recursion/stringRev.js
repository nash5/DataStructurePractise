function reverseString(s) {
    if(s.length === 1) return s;
    
    return reverseString(s.slice(1)).concat(s[0])
}

console.log(reverseString(["h","e","l","l","o"]));

/**
 * abcd -> dcba
 * bcd -> dcb
 * cd -> dc
 * d
 */