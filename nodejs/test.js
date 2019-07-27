var events = require('events');

function MyObj() {
    events.EventEmitter.call(this);
    this.warning = function (msg, msg2) {
        this.emit("someEvents", msg, msg2);
    }
}

MyObj.prototype.__proto__ = events.EventEmitter.prototype;

function myCallback(msg, msg2) {
    console.log('hi');
    console.log(msg);
    console.log(msg2);
}

var myObject = new MyObj();
myObject.on("someEvents", myCallback);

// myObject.emit("someEvents");
myObject.warning('hello', 'hahahaha');