 let incbtn = document.querySelector("#inc-button");
 let decbtn = document.querySelector("#dec-button");
 let countValue = document.querySelector("#count span");
 let resetbtn = document.querySelector("#reset");


let count = 0;
incbtn.addEventListener("click",()=>{
    count++;
    countValue.textContent = count;
})


decbtn.addEventListener("click",()=>{
    count--;
    countValue.textContent = count;
})

resetbtn.addEventListener("click",()=>{
    count = 0;
    countValue.textContent = count;
})



