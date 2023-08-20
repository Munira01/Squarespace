/*let gender = prompt("enter your gender")
let year = prompt("When were you born?")

let yil = function(yosh){
    return 2022-Number(year);
}

let pensiya = function(a){
    return 65 - yil();
}

if (gender == "male"){
    console.log(pensiya() - 18);
}
else{
    console.log(pensiya() - 20);
}*/

let character = prompt("Enter the character")
let month = Number(prompt ("Enter the month"))

let yosh = function(a, b){
    if (a == "dog"){
        console.log(b / 6);
    }

    else if(a == "fish"){
        console.log(b / 3);
    }

    else if(a == "cat"){
        console.log(b / 5);
    }

    else if(a == "person"){
        console.log(b / 12);
    }

    else{
        console.log("no such a character");
    }
}

console.log(yosh(character, month));



