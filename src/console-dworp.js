console.dworp = function (additionalOutput) {
    debug("dworp", additionalOutput)
}

console.blorp = function (additionalOutput) {
    debug("blorp", additionalOutput)
}

console.florp = function (additionalOutput) {
    debug("florp", additionalOutput)
}

console.derp = function (additionalOutput) {
    debug("derp", additionalOutput)
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
