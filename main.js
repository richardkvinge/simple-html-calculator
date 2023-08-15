const add = document.addition;
const sub = document.subtraction;
const mult = document.multiply;
const div = document.divide;

add.addEventListener("submit", function(event) {
    event.preventDefault();

    let addFirstNum = Number(add.addFirstNum.value);
    let addSecondNum = Number(add.addSecondNum.value);
    let addTotal = addFirstNum + addSecondNum;
    add.addFirstNum.value = "";
    add.addSecondNum.value = "";
    
    const addAnswer = document.createElement("div");
    addAnswer.textContent = addFirstNum + " + " + addSecondNum + " = " + addTotal;
    document.getElementById("div5").append(addAnswer);
    
});

sub.addEventListener("submit", function(event) {
    event.preventDefault();

    let subFirstNum = sub.subFirstNum.value;
    let subSecondNum = sub.subSecondNum.value;
    let subTotal = subFirstNum - subSecondNum;
    sub.subFirstNum.value = "";
    sub.subSecondNum.value = "";
    
    const subAnswer = document.createElement("div");
    subAnswer.textContent = subFirstNum + " - " + subSecondNum + " = " + subTotal;
    document.getElementById("div5").append(subAnswer);
    
});

mult.addEventListener("submit", function(event) {
    event.preventDefault();

    let multFirstNum = mult.multFirstNum.value;
    let multSecondNum = mult.multSecondNum.value;
    let multTotal = multFirstNum * multSecondNum;
    mult.multFirstNum.value = "";
    mult.multSecondNum.value = "";
    
    
    const multAnswer = document.createElement("span");
    multAnswer.textContent = multFirstNum + " * " + multSecondNum + " = " + multTotal;
    document.getElementById("div5").append(multAnswer);
    
});

div.addEventListener("submit", function(event) {
    event.preventDefault();

    let divFirstNum = div.divFirstNum.value;
    let divSecondNum = div.divSecondNum.value;
    let divTotal = divFirstNum / divSecondNum;
    div.divFirstNum.value = "";
    div.divSecondNum.value = "";
    
    const divAnswer = document.createElement("div");
    divAnswer.textContent = divFirstNum + " / " + divSecondNum + " = " + divTotal;
    document.getElementById("div5").append(divAnswer);
    
});