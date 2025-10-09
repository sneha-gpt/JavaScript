const accountID = 12;
let accountEmail = "abc@google.com";
var password = "121212";
accountName = "abc";
let account;

// accountID = 5; cannot change const 

console.log(accountID);

console.table([accountID, accountEmail, accountName, password, account]);

accountEmail = "efg@google.com";
password = 232323;
accountName = "efg";


console.table([accountID, accountEmail, accountName, password, account]);
