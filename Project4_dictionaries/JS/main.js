function My_Dictionary (){
    var Animal= {
        Species: "Dog",
        color:"Brown",
        breed:"Puddle",
        age:2,
        sound:"WangWang!"
    };
    delete Animal.age;
    document.getElementById("Dictionary").innerHTML = Animal.age;
}