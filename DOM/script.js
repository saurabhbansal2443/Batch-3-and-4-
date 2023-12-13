let input = document.querySelector(".inputBar");
let addbtn = document.querySelector(".addBtn");
let mainCont = document.querySelector(".mainContainer");


addbtn.addEventListener("click", function () {
    let taskInput = input.value;
    input.value = "";
    // console.log(taskInput)

    let myEle = document.createElement("div");
    myEle.classList.add("taskoutput");
    myEle.innerHTML = `  <span class="tasktext"> ${taskInput} </span>
                            <button class="done">Done</button>
                             <button class="delete"> Delete </button>`

    
     let doneBtn = myEle.querySelector(".done");
     let delBtn = myEle.querySelector(".delete");
     let tasktext = myEle.querySelector(".tasktext");

     doneBtn.addEventListener("click",function(){
            if(doneBtn.innerHTML=="Done"){
            tasktext.classList.add("strike");
            doneBtn.innerHTML="Not Done";
            }else{
                tasktext.classList.remove("strike");
                doneBtn.innerHTML="Done";
            }
     })
     delBtn.addEventListener("click",function(){
       mainCont.removeChild(myEle); 
     })
    mainCont.appendChild(myEle);

})