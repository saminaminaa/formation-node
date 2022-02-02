var user = require('./lib/user');
var u1 = new user("Alice")
var u2 = new user("Jason")
u1.say("bjr");
u2.say("yo");
console.log('User version = ' + u1.version);
console.log("Nb user = " + u1.users.length);
console.log("Nb user = " + u2.users.length);
const isDebugging = require("debug-mode");
 
console.log(isDebugging);