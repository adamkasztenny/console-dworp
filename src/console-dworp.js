console.dworp = function (...additionalOutput) {
    debug("dworp", additionalOutput)
}

console.blorp = function (...additionalOutput) {
    debug("blorp", additionalOutput)
}

console.florp = function (...additionalOutput) {
    debug("florp", additionalOutput)
}

console.derp = function (...additionalOutput) {
    debug("derp", additionalOutput)
}

function debug(type, additionalOutput) {
    console.debug(type, ...additionalOutput);
}

module.exports = function () {
    console.dworp = console.dworp;
    console.blorp = console.blorp;
    console.florp = console.florp;
    console.derp = console.derp;
}
