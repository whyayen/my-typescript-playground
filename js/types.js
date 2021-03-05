var lilPump = {
    name: 'Lil Pump',
    id: 0
};
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
var lilYutchy = new UserAccount('Lil Yutchy', 1);
// function return type declaration
function getAdminUser() {
    var admin = {
        name: 'Admin',
        id: 999
    };
    return admin;
}
function deleteUser(user) {
    console.log(user.name);
}
deleteUser(lilYutchy);
var checkbox = false;
function getLength(obj) {
    return obj.length;
}
var gg = {
    add: function (obj) { console.log('add:', obj); },
    get: function () { return 'abc'; }
};
gg.add('sss');
gg.get();
