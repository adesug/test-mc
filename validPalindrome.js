// ------------------------- soal 1 -------------------------------------

function isPalindrome(s) {
  
    s = s.toLowerCase();
    s = s.replace(/[^a-z0-9]/g, '');
    
  
    const reversed = s.split('').reverse().join('');
    
    return s === reversed;
}

// Cek hasil
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(isPalindrome("race a car")); // Output: false
console.log(isPalindrome("")); // Output: true
