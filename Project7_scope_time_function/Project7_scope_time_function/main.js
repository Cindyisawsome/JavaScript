var X = 66;
function divide_1() {
    document.getElementById("Divide1").innerHTML = (X/3);
}
function divide_2() {
    document.getElementById("Divide2").innerHTML =(X/2);
}
divide_1();
divide_2();

function divide_3() {
    var X = 99
    document.getElementById("Divide3").innerHTML=(X/3);
}
function divide_4() {
    
    document.getElementById("Divide4").innerHTML=(X/2);
}
divide_3();
divide_4();

//As 41
function get_Time(){
    if (new Date().getMinutes()> 30 ){
        document.getElementById("Time").innerHTML = "It's time to drink water." ;
    }
    if (new Date().getMinutes()< 30 ){
        document.getElementById("Time").innerHTML = "Do you have something to eat?";
    }
}


function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age>=18) {
        Drive ="OK, car is yours, you can drive now.";
    }
    else {
        Drive = "You are too young to drive.";
    }
    document.getElementById("How_old_are_you?").innerHTML = Drive;
}