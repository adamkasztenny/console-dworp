describe("console-dworp", function () {

    it('should dworp', function () {
        spyOn(console, 'debug');

        expect(console.dworp).toBeDefined();
        console.dworp();

        expect(console.debug).toHaveBeenCalledTimes(1);
        expect(console.debug).toHaveBeenCalledWith('dworp');
    })
});
