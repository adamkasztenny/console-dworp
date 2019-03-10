# console-dworp
The greatest debugging tool ever made.

[![npm version](https://badge.fury.io/js/%40angular%2Fcore.svg)](https://www.npmjs.com/console-dworp)

## Usage
`npm install console-dworp`

```javascript
require('console-dworp');

console.dworp();
```

This prints:

`dworp`

Any number of additional arguments can be used as well:

```javascript
console.dworp(42, null);
```

prints:

`dworp 42 null`

`console.blorp`, `console.florp` and `console.derp` are also available.
