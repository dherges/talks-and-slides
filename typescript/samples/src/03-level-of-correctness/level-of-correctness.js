var sample03;
(function (sample03) {
    var bar = 'foo';
    if (typeof bar === 'string') {
        var n = 5 * bar;
        console.log('n is ' + n);
    }
    console.log('This is super duper JavaScript! bar is ' + bar);
})(sample03 || (sample03 = {}));
//# sourceMappingURL=level-of-correctness.js.map