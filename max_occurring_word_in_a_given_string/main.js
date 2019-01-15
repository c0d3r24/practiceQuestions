
function getMostRepeatedString(str){
    let strObj = {};
    let max = 0;
    let maxString = '';
    str.split(' ').forEach( (item) => {
      strObj[item] = (strObj[item]+1) || 1; 
      
      if( max < strObj[item]){
        max = strObj[item];
        maxString = item;
      }
    });
    console.log(maxString, max);
  }
  
  getMostRepeatedString('aaa bbb aaa bbb cccc aaa ddd www com');