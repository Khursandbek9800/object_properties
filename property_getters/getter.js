let user = {
    name: "Khursandbek",
    surname: "Yusupov"
};

Object.defineProperty(user, 'fullName', {
    get() {
        return `${this.name} ${this.surname}`;
    },

    set(value) {
        [this.name, this.surname] = value.split(" ");
    }
});

alert(user.fullName); //Khursandkeb Yusupov

for (let key in user) alert(key)