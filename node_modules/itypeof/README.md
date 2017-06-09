# itypeof

General data types for values with the option to get class names as well in *strict* mode

### Interface
```
itypeof(value, strict)

Arguments
  value (*): The value to get the typeof.
  strict (Boolean): strict mode that will enable getting class names.

Returns
  (string): returns type of value that was passed in (lowercased), When
            a class name is returned it is not lowercased (so be careful).
```

#### How to use

```js
var itypeof = require('itypeof');

console.log( itypeof('i am a string') ) // -> string
console.log( itypeof(true) ) // -> boolean
console.log( itypeof({'iobj':true}) ) // -> object
console.log( itypeof(/i am a regexp/) ) // -> regexp
console.log( itypeof(['i am in an array']) ) // -> array
console.log( itypeof(new Date()) ) // -> date
console.log( itypeof(function(){}) ) // -> function
console.log( itypeof(3) ) // -> number
console.log( itypeof(null) ) // -> null
console.log( itypeof(undefined) ) // -> undefined

function Foo() {
  this.foo = "foo"  
}
console.log( itypeof(new Foo) ); // -> object

//passing a strict parameter
//will give you the class name of the object
console.log( itypeof(new Foo, true) ); // -> Foo
```

Please Note:

The regular typeof function will give you `object` if it tests a regexp.

eg.

```js
// regular typeof
console.log( typeof /i am a regexp/ ) // -> object
console.log( typeof(/i am a regexp/) ) // -> object
```

This is the main difference.

enjoy!

## Credits
Ferron Hanse - [Blog](http://pragmatic-coding.blogspot.com/2012/09/a-better-javascript-typeof-function.html)
