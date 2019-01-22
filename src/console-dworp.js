console.dworp = function (additionalOutput) {
     debug("dworp", additionalOutput)
}

function debug(type, additionalOutput) {
     console.debug(type, additionalOutput || '');
}

module.exports = function () {
    console.dworp = console.dworp;
}
