let user = {};

Object.defineProperty(user, "name", {
    value: "John",
    "writable": false,
});

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

user.name = "khursand"
alert(user.name)

alert(JSON.stringify(descriptor, null, 2));
