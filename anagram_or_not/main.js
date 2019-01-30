
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

  function anagramOrNot2(str1, str2) {
    return (str1
        .replace(/[^\w]/g,'')
        .toLowerCase()
        .split('')
        .sort()
        .join('') 
        ===
        str2
        .replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('')); 
}

// improved version of the anagramOrNot
function anagramOrNot3(str1, str2) {
    
  charMapA = buildingCharMap(str1);
  charMapB = buildingCharMap(str2);
  if(Object.keys(charMapA).length !== Object.keys(charMapB).length) return false;
  for(let k in charMapA) {if(charMapA[k]!== charMapB[k]) return false;} 
  return true;
}

function buildingCharMap(str){
    const charMap= {}
    for(let c of str.replace(/[^\w]/g, '').toLowerCase()){
        charMap[c] = charMap[c] + 1 || 1;
    }
    return charMap;
}

  anagramOrNot('Mary is Beautiful!','Army be Auti ful is!');
  anagramOrNot1('Mary is Beautiful!','Army be Auti ful is!');
  anagramOrNot2('Mary is Beautiful!','Army be Auti ful is!');