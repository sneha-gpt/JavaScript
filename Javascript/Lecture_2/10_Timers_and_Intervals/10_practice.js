let cnt = 0;
let btn = document.querySelector(".download-btn");
let progressBar = document.querySelector("#progressBar");
let percent = document.querySelector("#percentage");
let file_status = document.querySelector("#status");

let interval;

btn.addEventListener("click", () => {
    if(interval)
        return;
    file_status.textContent = "Downloading File...";

    interval = setInterval(function(){
       if(cnt <= 99){
        cnt++;
        progressBar.style.width = cnt + "%";
        percent.textContent = cnt + "%";
       }
       else{
        clearInterval(interval);
         file_status.textContent = "File Downloaded";
       }
    }, 5000/100)
})