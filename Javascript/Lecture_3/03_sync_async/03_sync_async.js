// // Callback

function profileLekarAao(username, cb){
    console.log("Fetching profile....");
    setTimeout(() => {
        cb({id: 1, username, age: 26, email: "abc@gmail.com"})
    }, 2000);
}

function saarePostLekarAao(id, cb){
    console.log("Fetching all Data...");
    setTimeout(() => {
        cb({id: id, posts: ["hey", "hello"]}, 3000);
    }, 3000)
}

function savedPostsLekarAao(id, cb){
    console.log("Fetching Saved Posts...");
    setTimeout(() => {
        cb({id: id, saved: [1, 2, 4]});
    }, 3000)
}

profileLekarAao("Rahul", function(data){
    console.log(data);
    saarePostLekarAao(data.id, function(posts){
        console.log(posts);
        savedPostsLekarAao(data.id, function(saved){
         console.log(saved);
    });
    });
});


// Promise

let pr = new Promise((res, rej) => {
    setTimeout(() => {
        let num = Math.floor(Math.random()*10);
        if(num > 5)
            res(num);
        else 
            rej(num);
    })
});

pr.then((num) => {
    console.log("Resolved with " + num);
}).catch((num) => {
    console.log("Rejected with " + num);
})

// Async/await 

let pr1 = new Promise((resolve, reject) => {
    let val = Math.floor(Math.random() * 10);
    val > 5 ? resolve("Resolved with " + val) : reject("Rejected with " + val);
});

async function abcd(){
    try{
        let val = await pr1;
        console.log(val);
    } catch (err){
        console.log(err);
    }
}

abcd();