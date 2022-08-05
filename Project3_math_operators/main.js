
function addition_Function(){
    var addition=869+69 ;
    document.getElementById("Math1").innerHTML = "28 + 69 = " + addition;
}
function subtraction_Function(){
    var subtraction = 869-69 ;
    document.getElementById("Math2").innerHTML = "1689 - 69 = " + subtraction;
}

function multiplication_Function(){
    var multiplication = 869*69 ;
    document.getElementById("Math3").innerHTML = "1689*69 = " + multiplication;
}
function modulus_Operator(){
    var remainder = 869%69 ;
    document.getElementById("Math4").innerHTML = "1689/69 remainder is:" + remainder;
}
function increment_Operator(){//start here, i have a question, why the answer turns to another page? how can i get the answer stay the same page.
    var No5= 8
    No5++;
    document.write(No5);
}
function decrement_Operator(){
    var No6=8;
    No6--;
    document.write(No6);
}
function random_Number(){
    document.write(Math.random()*200);}