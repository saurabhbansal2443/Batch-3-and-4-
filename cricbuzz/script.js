let inputBar = document.querySelector(".inputNumber");
let shapeInput = document.querySelector(".shape");
let colorInput = document.querySelector(".colorSelect");
let addBtn = document.querySelector(".addBtn");
let counter = document.querySelector(".count");
let cont = document.querySelector(".container");

let item = 0 ;

addBtn.addEventListener("click",function(){
    let snum = inputBar.value;
    inputBar.value="";
    let shape = shapeInput.value;
    let color = colorInput.value;
     cont.innerHTML="";
     counter.innerHTML=`Items - ${snum}`
     item = snum;
    for(let i=1 ; i<=snum ; i++){
    let myele = document.createElement("div");
    myele.classList.add(shape);
        myele.style.backgroundColor=color;

        myele.addEventListener("dblclick",function(){
            cont.removeChild(myele);
            item--;
            counter.innerHTML=`Items - ${item}`
        })
    cont.appendChild(myele);
    }
})