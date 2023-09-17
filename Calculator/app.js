let string = "";
let buttons = document.querySelectorAll(".btns");

Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if (e.target.innerText == "=" ){ //evaluating our result
            string = eval(string);
            document.querySelector("input").value = string;
        } 
        else if (e.target.innerText == "BS") { //this is a back-space functionality
            string = string.substring(0,string.length-1);
            document.querySelector("input").value = string;
        }
        else if (e.target.innerText == "AC"){ //this is all-clear functionality
            string = "";
            document.querySelector("input").value = string;
        } 
        else {
            string = string + e.target.innerText;
            document.querySelector("input").value = string;
        }
    })
        
});