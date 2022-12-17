const groceries = document.getElementsByClassName("groceries");
const userInput = document.getElementById("userInput");
const pencil = document.getElementById("pencil");
const allItems = document.getElementById("allItems");
let text;
console.log("test");
allItems.insertAdjacentHTML("beforeend", localStorage.getItem("alltext"));
var alltext = localStorage.getItem("alltext");
pencil.addEventListener("click", function(){
    allItems.innerHTML = "";
    userInput.value = ""
    localStorage.setItem('alltext', " ")
})
function addItem(){
    var ok = 0;
    var h2 = document.createElement("h2");
    h2.innerHTML = "- " + userInput.value;
    h2.addEventListener("click", function(){
        if(ok == 0){
         h2.style.textDecoration = "line-through";
         ok = 1;
        }
        else{
            h2.style.textDecoration = "none";
            ok = 0;
        }
    })
    var text = text + h2;
    allItems.insertAdjacentElement("beforeend", h2);
    localStorage.setItem('alltext', allItems.innerHTML);
}
userInput.addEventListener("keydown", function(event){
    if(event.key == "Enter"){
        addItem();
        userInput.value = "";
    }
})