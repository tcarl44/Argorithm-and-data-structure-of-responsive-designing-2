function palindrome(str) {
    let regex = /[A-Za-z0-9]/g;
    let matchedStr = str.match(regex).join("").toLowerCase();
    let reversedStr = [...matchedStr].reverse().join("").toLowerCase();
    console.log(matchedStr)
    console.log(reversedStr)
    if(matchedStr == reversedStr){
        return true
    }else{
        return false
    }
  }