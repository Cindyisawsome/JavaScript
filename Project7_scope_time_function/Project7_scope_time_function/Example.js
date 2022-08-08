function get_Date(){
    if(new Date().getMinutes() >40 ){
        document.getElementById("Greeting").innerHTML = "It's time!";
    }

}