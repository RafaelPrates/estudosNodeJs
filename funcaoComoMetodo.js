var getAge = function (extra) { //extra para o uso do apply
        return this.age + extra;
};

var person = {
    name : 'John',
    age: 20,
    getAge: getAge
};

console.log(person.getAge(2));
console.log(getAge.call(person, 2, 1, 3));
console.log(getAge.apply(person, [2, 3, 8, 6]));
//https://www.youtube.com/watch?v=OqR0hE-DQn4&index=7&list=PLQCmSnNFVYnT1-oeDOSBnt164802rkegc