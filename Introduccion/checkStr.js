/*
 * Exercise 2:
 * We want to compare two strings and check if
 * they are the same - case insensitive.
 * Return a boolean - true if the two strings are
 * the same, and false if they are not 
 */
let cad1 = prompt("Introduce la primera cadena");
let cad2 = prompt("Introduce la segunda cadena");
 
function checkTwoStringsSame(cad1, cad2) {
  if (cad1.LowerToCase === cad2.LowerToCase){
    console.log(true);
  }else{
    console.log(false);
  }
}
 
checkTwoStringsSame(cad1, cad2);
