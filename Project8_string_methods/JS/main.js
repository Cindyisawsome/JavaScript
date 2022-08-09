function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence. ";
    var whole_sentence = part_1.concat (part_2,part_3,part_4);
    document.getElementById ("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "He looks cute when he says I am dumb.";
    var Section = Sentence.slice (15,31);
    document.getElementById("Slice").innerHTML = Section;
}

function Uppercase_Method() {
    var text = "you look so cute.";
    document.getElementById("Uppercase").innerHTML = text.toUpperCase();
}

function string_Method() {
    var X = 285 ;
    document.getElementById("Numbers_to_string").innerHTML = X.toString() ;
}

function precision_Method() {
    var X= 18732.873007845465757;
    document.getElementById("Precision").innerHTML = X.toPrecision(9);
}

function Fixed_Method() {
    var X = 6.89754;
    document.getElementById("Fixed").innerHTML = X.toFixed(10);
}

function Valueof_Method() {
    var X= 367.9887;
    document.getElementById("Value").innerHTML = X.valueOf(10);
}