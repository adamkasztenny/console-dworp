describe("console-dworp", function () {

    it('should dworp, with no additional arguments', function () {
        checkDebug(console.dworp, 'dworp', '');
    });
    
    it('should dworp, with additional arguments', function () {
        checkDebugWithAdditionalArguments(console.dworp, 'dworp', 'some message');
    });

    it('should export' , function () {
        expect(module.exports).toBeDefined();
    });

    function checkDebug(func, type) {
        spyOn(console, 'debug');

        expect(func).toBeDefined();
        func();

        expect(console.debug).toHaveBeenCalledTimes(1);
        expect(console.debug).toHaveBeenCalledWith(type);
    }

    function checkDebugWithAdditionalArguments(func, type, additionalArguments) {
        spyOn(console, 'debug');

        expect(func).toBeDefined();
        func(additionalArguments);

        expect(console.debug).toHaveBeenCalledTimes(1);
        expect(console.debug).toHaveBeenCalledWith(type, additionalArguments);
    }
});
