const {
  performance
} = require('perf_hooks');

var LightJSON = require('../index.js')

// define schema
var schema = {
  id:'string',
  name:'string',
  data: [{
    x:'uint',
    y:'uint',
    z:'uint'
  }],
  date:'date'
};

// create data
var info = {
  id:'test',
  name:'test',
  data:[],
  date:new Date()
};
for(var i = 0; i < 1000; i++) {
  info.data.push({
    x:i,
    y:i,
    z:i
  })
}

// create instance
var LJSON = new LightJSON(schema);

// performance test
console.log('Deserialize')
console.log('\tBytes')
var output_buffer = LJSON.binarify(info)
var output_string = JSON.stringify(info);
console.log('\t\t',output_buffer.byteLength, 'byte');
console.log('\t\t',output_string.length, 'byte');

console.log('Serialize')
console.log('\tTime(ms)')
var t0 = performance.now();
for(var i = 0; i < 1000; i++) {
  LJSON.parse(output_buffer);
}
console.log('\t\t',Math.round(performance.now() - t0), 'ms');

t0 = performance.now();
for(var i = 0; i < 1000; i++) {
  JSON.parse(output_string)
}
console.log('\t\t',Math.round(performance.now() - t0), 'ms');