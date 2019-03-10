describe("console-dworp", function () {

    describe("dworp", function () {
        it('should dworp, with no additional arguments', function () {
            checkDebug(console.dworp, 'dworp', '');
        });
        
        it('should dworp, with additional arguments', function () {
            checkDebugWithAdditionalArguments(console.dworp, 'dworp', 'some message');
        });
    });
    
    describe("blorp", function () {
        it('should blorp, with no additional arguments', function () {
            checkDebug(console.blorp, 'blorp', '');
        });
        
        it('should blorp, with additional arguments', function () {
            checkDebugWithAdditionalArguments(console.blorp, 'blorp', 'some message');
        });
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
