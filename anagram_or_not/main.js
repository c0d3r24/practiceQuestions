
function anagramOrNot(str1, str2){
    str1Obj = {};
    str2Obj = {};
  
    str1.toLowerCase().split('')
      .forEach((item) =>{
        if(item === ' ' || item === '!' || item === ',') return;
        str1Obj[item] = str1Obj[item] + 1 || 1;
      });
    str2.toLowerCase().split('')
      .forEach((item) =>{
         if(item === ' ' || item === '!' || item === ',') return;
        str2Obj[item] = str2Obj[item] + 1 || 1;
      });
    
    for(let c in str1Obj){
      if (str1[c] !== str2[c]) {
         console.log('not a anagram');
         return false;
         }
    } 
    return true
  
  
  }
  
  
  anagramOrNot('Mary is Beautiful!','Army be Auti ful is!');