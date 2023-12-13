let input = document.querySelector(".inputBar");
let addbtn = document.querySelector(".addBtn");
let mainCont = document.querySelector(".mainContainer");


addbtn.addEventListener("click", function () {
    let taskInput = input.value;
    input.value = "";
    // console.log(taskInput)
    if(taskInput!=""){
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
            tasktext.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"></path></svg> ${taskInput}`
            }else{
                tasktext.classList.remove("strike");
                doneBtn.innerHTML="Done";
                tasktext.innerHTML=taskInput;
            }
     })
     delBtn.addEventListener("click",function(){
       mainCont.removeChild(myEle); 
     })
    mainCont.appendChild(myEle);
    }else{
        alert("fill the input field");
    }

})