var sample04_flow_typing;
(function (sample04_flow_typing) {
    function foo(input) {
        // A: 'input' can be an arbitrary type here
        if (typeof input === 'string') {
            // B: 'input' is supposed to be a 'String' type in this branch..
            var another = input.concat(' - es ist ein String!');
        }
        else if (typeof input === 'number') {
            // C: 'input' is supposed to be a 'Number' type in this branch..
            var calc = 8 * input;
        }
        // A: 'input' can be an arbitrary type here
    }
})(sample04_flow_typing || (sample04_flow_typing = {}));
//# sourceMappingURL=flow-typing.js.map