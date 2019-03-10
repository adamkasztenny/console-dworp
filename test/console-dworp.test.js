describe("console-dworp", function () {

    const testList = ['something', 2, null];
    const testObject = {1: 'something', 2: 'somethingElse', 5: 1, 4: [1, 2, 3]};
    const testAdditionalArguments = [null, undefined, 'some message', 0, 1, 2, false, true, 
        testList, testObject];

    describe("dworp", function () {
        it('should dworp, with no additional arguments', function () {
            checkDebug(console.dworp, 'dworp');
        });
        
        it('should dworp, with additional arguments', function () {
            checkDebugWithAdditionalArguments(console.dworp, 'dworp', testAdditionalArguments);
        });
    });
    
    describe("blorp", function () {
        it('should blorp, with no additional arguments', function () {
            checkDebug(console.blorp, 'blorp');
        });
        
        it('should blorp, with additional arguments', function () {
            checkDebugWithAdditionalArguments(console.blorp, 'blorp', testAdditionalArguments);
        });
    });
    
    describe("florp", function () {
        it('should florp, with no additional arguments', function () {
            checkDebug(console.florp, 'florp');
        });
        
        it('should blorp, with additional arguments', function () {
            checkDebugWithAdditionalArguments(console.florp, 'florp', testAdditionalArguments);
        });
    }); 

    describe("derp", function () {
        it('should derp, with no additional arguments', function () {
            checkDebug(console.derp, 'derp');
        });
        
        it('should derp, with additional arguments', function () {
            checkDebugWithAdditionalArguments(console.derp, 'derp', testAdditionalArguments);
        });
    });
    
    it('should export', function () {
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
        func(...additionalArguments);

        expect(console.debug).toHaveBeenCalledTimes(1);
        expect(console.debug).toHaveBeenCalledWith(type, ...additionalArguments);
    }
});
