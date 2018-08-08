#  Hellewhile
A *helle*-awesome while loop implementation for promises.

[![NPM](https://nodei.co/npm/hellewhile.png)](https://npmjs.org/package/hellewhile)

![Travis (.org)](https://img.shields.io/travis/sahellebusch/hellewhile.svg)
![npm](https://img.shields.io/npm/v/hellewhile.svg)


### Usage

Hellewhile is a UMD module, therefore is compatible with both AMD and CommonJS:

```javascript
import hellewhile from 'hellewhile';
const hellewhile = require('hellewhile');
```

### Example Usage
See tests!

<a name="module_hellewhile"></a>

## hellewhile
An awesome while loop implementation for promises.


* [hellewhile](#module_hellewhile)
    * _static_
        * [.hellewhile](#module_hellewhile.hellewhile)
    * _inner_
        * [~predicate(results, context)](#module_hellewhile..predicate) ⇒ <code>Boolean</code>
        * [~asyncFn(context)](#module_hellewhile..asyncFn) ⇒ <code>Promise.&lt;\*&gt;</code>

<a name="module_hellewhile.hellewhile"></a>

### hellewhile
While loop implementation for an asynchronous function.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| asyncFn | <code>asyncFn</code> |  | the asynchronous function run with the context object. |
| predicate | <code>predicate</code> |  | the predicate function to be used as the while loop conditional. |
| [context] | <code>Object</code> | <code>null</code> | optional context object to be passed into the asyncFn and predicate functions. |
| [tracker] | <code>String</code> | <code>null</code> | optional property to be set on the context object that will store the results of each individual asyncFn call. |

<a name="module_hellewhile..predicate"></a>

### hellewhile~predicate(results, context) ⇒ <code>Boolean</code>
Predicate function to be applied to the results of the asyncFunc.

**Returns**: <code>Boolean</code> - if true, ends the loop.  

| Param | Type | Description |
| --- | --- | --- |
| results | <code>\*</code> | results returned from the asyncFn |
| context | <code>Object</code> \| <code>null</code> | the context object, null if not passed in. |

<a name="module_hellewhile..asyncFn"></a>

### hellewhile~asyncFn(context) ⇒ <code>Promise.&lt;\*&gt;</code>
Asynchronous function to loop over.

**Returns**: <code>Promise.&lt;\*&gt;</code> - results of the asynchronous call  

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Object</code> \| <code>null</code> | the context object, null if not passed in. |

