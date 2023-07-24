// please complete the implementation
class EventEmitter {
  constructor() {
    this.events = []
  }
  subscribe(eventName, callback) {
    const exitEvent = this.events.find(e => e.name == eventName)
    const that = this
    if (exitEvent) {
      exitEvent.callbacks.push(callback)
    } else {
      this.events.push({
        name: eventName,
        callbacks: [callback]
      })
    }
    return {
      release: function () {
        const exitEvent = that.events.find(e => e.name = eventName)
        if (exitEvent) {
          let index = exitEvent.callbacks.findIndex(e => e == callback)
          exitEvent.callbacks.splice(index, 1)
        } else {
          console.log('already released')
        }
      }
    }
  }

  emit(eventName, ...args) {
    const exitEvent = this.events.find(e => e.name == eventName)
    if (exitEvent) {
      exitEvent.callbacks.forEach(func => {
        return func.apply(this, args)
      })
    } else {
      console.log('event does not exist')
    }
  }
}
const emitter = new EventEmitter()
callback1 = function (...args) {
  console.log(args, 'callback1')
}
callback2 = function (...args) {
  console.log(args, 'callback2')
}
const sub1 = emitter.subscribe('event1', callback1)
const sub2 = emitter.subscribe('event2', callback2)
const sub3 = emitter.subscribe('event1', callback1)
emitter.emit('event1', 1, 2);
sub1.release()
sub3.release()
emitter.emit('event1', 1, 2);
emitter.emit('event2', 1, 2);