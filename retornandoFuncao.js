var helloWorld = function () {
    return function (){
        return "Hell or World";
    };
};

console.log(helloWorld()); // retorna uma função
console.log(helloWorld()()); // retorna o retorno da função filha
