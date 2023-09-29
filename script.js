const dinosaur = document.getElementById("dino");

function jump(){
    dinosaur.style.top = "50px";

    setTimeout(function(){
        dinosaur.style.top = "115px";
    }, 500)
}

document.addEventListener("keydown", function (event){
    jump();
});