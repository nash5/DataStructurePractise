// Frequency counter
/**
242. Valid Anagram
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
*/

/**
 * 
 * @param {string} s 
 * @param {string} t 
 * @returns {boolean}
 */
function isValidAnagram(s, t) {
    if (s.length !== t.length) return false;

    let counter_1 = {};
    let counter_2 = {};

    [...s].forEach((v) => {
        counter_1[v] ? counter_1[v]++ : counter_1[v] = 1;
    });

    [...t].forEach((v) => {
        counter_2[v] ? counter_2[v]++ : counter_2[v] = 1;
    })

    for (let key in counter_1) {
        if (counter_1[key] !== counter_2[key]) {
            return false;
        }
    }

    return true;
}

console.log(isAnagram('Los2l', 'l2sol'));