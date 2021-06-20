"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Greeting_1 = require("./Greeting");
// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {
// более современный и удобный для про :)
// уровень локальной логики
var GreetingContainer = function (_a) {
    var users = _a.users, addUserCallback = _a.addUserCallback;
    // деструктуризация пропсов
    var _b = react_1.useState(""), name = _b[0], setName = _b[1]; // need to fix any
    var _c = react_1.useState(""), error = _c[0], setError = _c[1]; // need to fix any
    var setNameCallback = function (e) {
        setName(e.currentTarget.value); // need to fix
    };
    var addUser = function () {
        addUserCallback(name);
        alert("Hello " + name + " !"); // need to fix
    };
    var totalUsers = users.length; // need to fix
    return (react_1["default"].createElement(Greeting_1["default"], { name: name, setNameCallback: setNameCallback, addUser: addUser, error: error, totalUsers: totalUsers }));
};
exports["default"] = GreetingContainer;
