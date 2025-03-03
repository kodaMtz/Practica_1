//URILIZANDO JSON
const user = {
  fullname: "Martinez Irraestro Kevin",
  age: 21,
  gender: "H",
  toString() {
    return `{nombre : "${this.fullname}", "edad": "${this.age}" }`;
  },
};

//console.log(user.toString());
console.log(JSON.stringify(user));

const student = {
  nam3: "Jose Mario",
  age: 21,
  isBoss: false,
  course: ["JavaScript", "Python", "Kotlin"],
};
console.log(JSON.stringify(student));
//Al resultado se le llama JSON codificado.
