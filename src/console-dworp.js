console.dworp = function (additionalOutput) {
     console.debug("dworp", additionalOutput || '');
}

module.exports = function () {
    console.dworp = console.dworp;
}
