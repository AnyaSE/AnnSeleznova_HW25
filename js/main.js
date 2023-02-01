const input = document.getElementById("input__name");
const shadow = document.getElementById("shadow__text");

input.addEventListener("focus", function(){
    shadow.style.display = "block";
});

input.addEventListener("blur", function(){
    shadow.style.display = "none";
    });