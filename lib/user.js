var User = function(user){
    this.name = user;
    this.version = '1.1.0';
    // debbuger;
    this.uid = this.users.push(this);
    this.say = function(msg){
        console.log(this.name + ' say : ' + msg)
    }
};
User.prototype.users = [];
module.exports = User;
// module.exports.version = '1.1.0';
