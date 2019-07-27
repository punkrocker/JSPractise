var events = require('events');

function MyObj()
{
    events.EventEmitter.call(this);
}
MyObj.prototype.__proto__ = events.EventEmitter.prototype;

function myCallback() {
    console.log('hi');
}

var myObject = new MyObj();
myObject.on("someEvents", myCallback);

myObject.emit("someEvents");