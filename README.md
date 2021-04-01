# light-json
light-json for node.js and the browser

## Install
`npm install light-json`

## Usage
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