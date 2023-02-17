

let currentTime = new Date();

currentTime = currentTime.getHours();


let greet = document.getElementById("greet");

if(currentTime >=0 && currentTime < 12){
    greet.innerHTML ="Good Morning";
    console.log(greet.innerHTML);
}

else if(currentTime >= 12 && currentTime < 19){
    greet.innerHTML = "Good afternoon";
    console.log(greet.innerHTML);
}

else{
    greet.innerHTML = "Good Evening";
    console.log( greet.innerHTML);
}
console.log(greet);