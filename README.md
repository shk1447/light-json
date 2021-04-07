# light-json
light-json for node.js and the browser

## Install
`npm install light-json`

## Usage
### NodeJS
```js
var LightJSON = require('light-json')
var schema = {
  id:'string',
  name:'string',
  data: [{
    x:'uint',
    y:'uint',
    z:'unit'
  }]
};
var LJSON = new LightJSON(schema);
var output_buffer = LSON.binarify({
  id:'test',
  name:'test',
  data:[{
    x:1,
    y:1,
    z:1,
  }]
})
console.log(output_buffer);
var output_json = LSON.parse(output_buffer)
console.log(output_json);
```
### Browser
#### Javascript
```html
<script type="module" src="/node_modules/light-json/client.js"></script>
<script type="module">
  var ljson = new LJSON({id:'string'});
  var binary_json = ljson.binarify({id:'test'});
  console.log(binary_json);
  var json = ljson.parse(binary_json);
  console.log(json)
</script>
```
#### Import Module
```js
import LJSON from 'light-json';

var ljson = new LJSON({id:'string'});
var binary_json = ljson.binarify({id:'test'});
console.log(binary_json);
var json = ljson.parse(binary_json);
console.log(json)
```

## Furture Feature
- Websocket connection package between browser and server. (package name : light-ws and light-ws-client.)
- Interworking with other languages.