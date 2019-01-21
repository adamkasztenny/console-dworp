console.dworp = function () {
    console.debug("dworp");
}

module.exports = function () {
    console.dworp = console.dworp;
}
