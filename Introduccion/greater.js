/* Exercise #1
 * Create a function that takes in one number
 * and checks if the number is greater than  10. Print out to the console true if it is greater and false otherwise.
 */
 
let num = parseInt(prompt("Ingresa un número"));
function validaNumero (num){
  if (num > 10){
    console.log (true);
  }else{
    console.log (false);
  }
}
validaNumero (num);
