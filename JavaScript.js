const str = prompt("Enter a string");
const checkSubStr = prompt("Enter a string that is existed in a given string");
// if(str.includes(checkSubStr)){
//   document.write("The string contains the sub string");
// }
// else{
//   document.write("The string didn't contains the sub string");
// }
if(str.indexOf(checkSubStr) !== -1){
  document.write("The string contains the sub string");
}
else{
  document.write("The string didn't contains the sub string");
}