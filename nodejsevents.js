const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('WaterFull', () => {
  console.log('Turn off motor!');
  setTimeout(() => {
      console.log('turn of motor! it is gentle reminder')
  }, 3000);
});
console.log("Script is running")
myEmitter.emit('WaterFull');
console.log("Script is still running")
myEmitter.emit('WaterFull');
