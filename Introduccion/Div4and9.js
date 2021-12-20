/*
 * Exercise #2
 * Create a function that takes in one number
 * and checks if it is divisible by 4 or divisible by 9. 
 * Print out to the console true if a number
 * if divisible by 4 or 9, and false if a
 * number is not divisible by either number.
 */

let num = parseInt(prompt("Ingresa un número"));
 
function validaNumeroDiv (num){
 
   var resc = num % 4;
   var resn = num % 9;
  if (resc == 0 || resn ==0){
    console.log (true);
    console.log (resc);
    console.log (resn);
  }else{
    console.log (false);
    console.log (resc);
    console.log (resn)
  }
}
validaNumeroDiv (num);
