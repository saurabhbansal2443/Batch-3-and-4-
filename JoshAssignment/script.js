let input1 = document.querySelector(".i1");
let input2 = document.querySelector(".i2");
let input3 = document.querySelector(".i3");

let addBtn = document.querySelector(".addBtn");
let delBtn = document.querySelector(".delBtn");

let flag = false ;

let mainCont = document.querySelector(".mainCont");


addBtn.addEventListener("click",function(){
    let myEle = document.createElement("div");
    myEle.classList.add("box");

    myEle.innerHTML=` <p>${input1.value}</p>
    <p>${input2.value}</p>
    <p>${input3.value}</p>`

    myEle.addEventListener("dblclick" , function(){
        if(flag == true ){
          mainCont.removeChild(myEle);
        }
    })

    mainCont.appendChild(myEle);
    
})

delBtn.addEventListener("click",function(){
   if(flag == false){
    delBtn.style.color="red";
   }else{
    delBtn.style.color="black";
   }
   flag = !flag;
})
