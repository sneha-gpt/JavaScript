let cnt = 10;

let interval = setInterval(() => {
    if(cnt >= 0){
        console.log(cnt);
        cnt--;
    }
    else 
        clearInterval(interval);
}, 1000)