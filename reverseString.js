let reverseString= (stringValue)=>{
	let stringValueArray = [];
let stringValueLength =  stringValue.length;
let reversedArray = [];
let reversedString = "";

if(stringValue === ''){
  return null;
  
}

for(counter = 0;counter<stringValueLength;counter++)
{
stringValueArray.push(stringValue.charAt(counter));  
  
  
}

for(counter = stringValueLength - 1;counter>=0;counter--)
{
reversedArray.push(stringValueArray[counter]);

  reversedString = reversedArray.join('');
  
  
  
}



if(stringValue === reversedString){
  
  return true;
}
else{
return reversedString;
}
}

reverseString('');



exports.reverseString = reverseString;