

let home = document.getElementById("home");
let homedd=document.getElementById("homedd")
home.addEventListener("click",()=>{
    if (homedd.style.display === "block") {
        homedd.style.display = "none";
    } else {
        homedd.style.display = "block";
    }
})
