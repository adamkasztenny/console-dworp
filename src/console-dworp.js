console.dworp = function (additionalOutput) {
    debug("dworp", additionalOutput)
}

function debug(type, additionalOutput) {
    if (additionalOutput) {
        console.debug(type, additionalOutput);
    }
    else {
        console.debug(type);
    }
}

module.exports = function () {
    console.dworp = console.dworp;
    console.blorp = console.blorp;
}
