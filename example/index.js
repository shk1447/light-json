const {
  performance
} = require('perf_hooks');

var LightJSON = require('../index.js')

// define schema
var schema = [{
  id:'string',
  name:'string',
  data: [{
    x:'uint',
    y:'uint',
    z:'uint'
  }],
  date:'date'
}];

// create data
var info = [{
  id:'test',
  name:'test',
  data:[],
  date:new Date()
}];
for(var i = 0; i < 10000; i++) {
  info[0].data.push({
    x:i,
    y:i,
    z:i
  })
}

// create instance
var LJSON = new LightJSON(schema);

// performance test
console.log('Serialize for server')
console.log('\tBytes')
var t0 = performance.now();
for(var i = 0; i < 100; i++) {
  var output_buffer = LJSON.binarify(info)
}
console.log('\t\t',Math.round(performance.now() - t0), 'ms');
var t0 = performance.now();
for(var i = 0; i < 100; i++) {
  var output_string = JSON.stringify(info);
}
console.log('\t\t',Math.round(performance.now() - t0), 'ms');
console.log('\t\t',output_buffer.byteLength, 'byte');
console.log('\t\t',output_string.length, 'byte');

console.log('Deserialize for client')
console.log('\tTime(ms)')
t0 = performance.now();
for(var i = 0; i < 100; i++) {
  LJSON.parse(output_buffer);
}
console.log('\t\t',Math.round(performance.now() - t0), 'ms');

t0 = performance.now();
for(var i = 0; i < 100; i++) {
  JSON.parse(output_string)
}
console.log('\t\t',Math.round(performance.now() - t0), 'ms');