function Call_Loop() {
    var Digit = "" ;
    var X = 21;
    while (X > 1 ) {
        Digit +=  X - 1+"<br>" ;
        X-- ;
    }
    document.getElementById ("Loop").innerHTML = Digit;
}

var  Studentsname = ["Cindy","David","John","Micky","Zoe","lily"];
var  Content = "";
var  Y;
function For_Loop() {
    for (Y = 0; Y < Studentsname.length; Y++) {
    Content += Studentsname[Y] + "<br>";
    }
    document.getElementById("List_of_studentsname").innerHTML = Content ;
}

function catpics() {
    var Cat_Picture = [] ;
    Cat_Picture[0] = "playing";
    Cat_Picture[1] = "sleeping" ;
    Cat_Picture[2] = "Eating" ;
    Cat_Picture[3] = "Purring" ;
    document.getElementById("cat").innerHTML = "In this picture, the cat is " + Cat_Picture[1] + ".";
}

function constant_function() {
    const Musical_Instruent = {type:"guitar",brand:"Fender",color:"black"};
    Musical_Instruent.color = "blue";
    Musical_Instruent.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instruent.type + " was " + Musical_Instruent.price;
}

function Let_function() {
    var X = 82;
    document.write(X);
    {let X = 33;
    document.write("<br>" + X);
    }
    document.write("<br>" + X);
}
function myFunction(){
    document.getElementById("Return").innerHTML = Return_function("Cindy");
    function Return_function(name) {
    
    return "Hello " + name;
    }
}
function Object_function(){
    let car = {
        make: " Lexus ",
        model:" RX350 ",
        year:" 2021 ",
        color:" white ",
        description : function() {
            return "The car is a " + this.year + this.color + this.make + this.model;
        }
    };
    document.getElementById("Car_Object").innerHTML = car.description();
}

function Break_function() {
    const cars = ["BMW", "Volvo","BENZ","Ford","Lexus"];
    let text = "";
    list: {
        text += cars[0] + "<br>";
        text += cars[1] + "<br>";
        
        text += cars[2] + "<br>";
        break list;
        text += cars[3] + "<br>";
        text += cars[4] + "<br>";
    }
    document.getElementById("Break_Object").innerHTML = text;
}