#  Hellewhile
An awesome while loop implementation for promises.

[![NPM](https://nodei.co/npm/hellewhile.png)](https://npmjs.org/package/hellewhile)

![Travis (.org)](https://img.shields.io/travis/sahellebusch/hellewhile.svg)
![npm](https://img.shields.io/npm/v/hellewhile.svg)


### Usage

Hellewhile is a UMD module, therefore is compatible with both AMD and CommonJS:

```javascript
import hellewhile from 'hellewhile';
const { hellewhile } = require('hellewhile');
```

### Example Usage
See tests!

### API

##### flatten(unflattened)
```javascript

<a name="module_hellewhile"></a>

## hellewhile
An awesome while loop implementation for promises.

<a name="module_hellewhile.hellewhile"></a>

### hellewhile.hellewhile(asyncFn, predicate, [context], [tracker])
While loop implementation for an asynchronous function.

**Kind**: static method of [<code>hellewhile</code>](#module_hellewhile)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| asyncFn | <code>function</code> |  | the asynchronous function run with the context object. |
| predicate | <code>function</code> |  | the predicate function to be used as the while loop conditional.  Provided the asyncFn results and context object. |
| [context] | <code>Object</code> | <code></code> | optional context object to be passed into the asyncFn and predicate functions. |
| [tracker] | <code>String</code> | <code></code> | optional property to be set on the context object that will store the results of each individual asyncFn call. |



