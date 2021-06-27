
function palindrome(str) {
    const re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    const len = str.length;
    for (let i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          console.log(false);
      }
    }
    console.log(true);
   }
   palindrome("A man, a plan, a canal. Panama");
  
  