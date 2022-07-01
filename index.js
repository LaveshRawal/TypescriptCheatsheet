var id = 5;
var fname = "Max";
var isCool = true;
var x = [1, true, 3];
//tuple
var tuple = [1, "Max"];
// tuple array
var tupleArray = [
    [1, "Max"],
    [2, "Manu"],
    [3, "Max"],
];
//union
var id1 = 5;
//enums
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "UP";
    Direction2["Down"] = "DOWN";
    Direction2["Left"] = "LEFT";
    Direction2["Right"] = "RIGHT";
})(Direction2 || (Direction2 = {}));
//Objects
var user = {
    name: "Max",
    age: 30,
    hobbies: ["Sports", "Cooking"]
};
var user1 = {
    name: "Max",
    age: 30,
    hobbies: ["Sports", "Cooking"]
};
// type assertion
var cid = 1;
var customerIdasNum = cid;
//functions
function addNum(x, y) {
    return x + y;
}
// void type for no return value
function log(message) {
    console.log(message);
}
var user2 = {
    name: "Max",
    age: 30
};
var p1 = 1;
var add = function (x, y) {
    return x + y;
};
// classes
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    Person.prototype.register = function () {
        console.log("".concat(this.id, " is registered"));
    };
    return Person;
}());
var prem = new Person(1, "Prem Kumar");
var prem1 = new Person(2, "kumar kumar");
prem.register();
//generics reusable components with type parameters
function getArray(items) {
    return new Array().concat(items);
}
var numArray = getArray([1, 2, 3]);
var strArray = getArray(["Max", "Manu"]);
