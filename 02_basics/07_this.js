//---------------------------------This (Current context)-------------------------

const user = {
    username: "Sneha",
    age: 20,

    welcomeMessage: function(){
        console.log(`Hello ${this.username}`)
        console.log(this);
    }
}

user.welcomeMessage();
user.username = "Sam";
user.welcomeMessage();

console.log(this);