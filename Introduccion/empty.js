/**
 * Exercise 1:
 * We want to check if a string is empty.
 * If a string is not empty, we want to print
 * out the first character of that string.
 * If a string is empty, print out a text saying
 * "This string is empty" 
 */
let cadena = prompt("Introduce la cadena");
 
function checkEmptyString(cadena) {
  if (cadena == ""){
    console.log("Esta cadena esta vacía");
  }else{
    console.log(cadena.substr(0,1));
  }
}
checkEmptyString(cadena);
