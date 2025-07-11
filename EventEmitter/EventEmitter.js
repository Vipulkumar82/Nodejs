const events = require('events')

const eventEmitter = new events.EventEmitter;

eventEmitter.on('speak',function(name){
    console.log(name,'is Speaking');
})

eventEmitter.emit('speak','Vipul Thakur');