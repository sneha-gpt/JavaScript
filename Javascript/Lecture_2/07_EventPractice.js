let input = document.querySelector("input");

let span = document.querySelector("span");

input.addEventListener("keydown", (e) => {
    // let cnt = Number(span.textContent);

    // console.log(e)

    // if(e.key === "Backspace")
    //     span.textContent = Math.max(0, cnt-1);
    // else 
    //     span.textContent = cnt+1;

    let left = 20 - input.value.length;

    span.textContent = left;

    span.style.color = left < 0 ? "red" : "white";
})