describe("console-dworp", function () {

    it('should dworp, with no additional arguments', function () {
        spyOn(console, 'debug');

        expect(console.dworp).toBeDefined();
        console.dworp();

        expect(console.debug).toHaveBeenCalledTimes(1);
        expect(console.debug).toHaveBeenCalledWith('dworp', '');
    });
    
    it('should dworp, with additional arguments', function () {
        spyOn(console, 'debug');

        expect(console.dworp).toBeDefined();
        console.dworp('some message');

        expect(console.debug).toHaveBeenCalledTimes(1);
        expect(console.debug).toHaveBeenCalledWith('dworp', 'some message');
    });

    it('should export the dworp' , function () {
        expect(module.exports).toBeDefined();
    });
});
