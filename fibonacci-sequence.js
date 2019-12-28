/** OVERVIEW: This program displays the Fibonacci sequence with some integer, n, many times
  *           in JavaScript. The Snippets inside the Google Chrome developer tools was used 
  *           as the text editor.
  *
  *  Note: This is a just a coding exercise/challenge for "The Complete 2020 Web Development 
  *        Bootcamp Course" on Udemy by Angela Yu. 
  */

// Instance variables
var n;
var currentNum = 0;
var fiboArr = [];

// Getting the number of terms from the user & generating the sequence
n = prompt("Please enter the amount of terms you would like from the Fibonacci Sequence:");
fiboArr = fibonacciGenarator(n);

// Printing out the Fibonacci Sequence
alert("For " + n + " time(s), the Fibonacci sequence is: \n\n" + fiboArr);

// Generator for the Fibonacci Sequence
function fibonacciGenarator(n){
  
  for(var i = 0; i < n; i++){
    
     if(i === 0){
        fiboArr.push(0);

     }else if(i ===1){
        fiboArr.push(1);

     }else{
        currentNum = fiboArr[i-1] + fiboArr[i-2];
        fiboArr.push(currentNum); 
     }

  }// End of For Loop

  return fiboArr;

}// End of fibonacciGenarator()

