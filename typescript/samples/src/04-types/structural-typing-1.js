var sample04_structural;
(function (sample04_structural) {
    // WATCH OUT: looks like nominal typing (Java, C#, etc.)
    var Person = (function () {
        function Person() {
            this.eman = ''; // compile error: "Property 'name' is
            // missing in type 'Person'."
        }
        return Person;
    }());
    // WATCH OUT (!!!): this is no compile error in TypeScript
    //let p: Person = { name: 'foo' };
})(sample04_structural || (sample04_structural = {}));
//# sourceMappingURL=structural-typing-1.js.map