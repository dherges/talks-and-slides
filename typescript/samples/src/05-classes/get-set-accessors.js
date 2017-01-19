var sample05;
(function (sample05) {
    var Tiger = (function () {
        function Tiger() {
        }
        Object.defineProperty(Tiger.prototype, "name", {
            get: function () {
                return this._myName + ", a Tiger";
            },
            set: function (val) {
                this._myName = val;
            },
            enumerable: true,
            configurable: true
        });
        return Tiger;
    }());
    var t = new Tiger();
    t.name = 'Shere Khan';
    console.log(t.name);
})(sample05 || (sample05 = {}));
//# sourceMappingURL=get-set-accessors.js.map