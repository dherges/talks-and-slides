var sample04_duck_typing;
(function (sample04_duck_typing) {
    var ducktale = { name: 'Dagobert' };
    // ↳ var 'ducktale' is an 'any' type
    function checkDuck(input) {
        if (input && input.name && typeof input.name === 'string') {
            return input;
        }
        throw new TypeError('Not a Duck: ' + input);
    }
    var dagobert = checkDuck(ducktale);
    // ↳ var 'dagobert' is a 'Duck' type - or TypeError is thrown
    console.log(dagobert.name);
})(sample04_duck_typing || (sample04_duck_typing = {}));
//# sourceMappingURL=duck-typing.js.map