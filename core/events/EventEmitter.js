class EventEmitter {
    constructor() {
      this.events = {};
    }
  
    on(event, listener) {
      if (!this.events[event]) {
        this.events[event] = [];
      }
      this.events[event].push(listener);
    }
  
    emit(event, ...args) {
      if (this.events[event]) {
        this.events[event].forEach(listener => listener(...args));
      }
    }
  
    off(event, listenerToRemove) {
      if (this.events[event]) {
        this.events[event] = this.events[event].filter(listener => listener !== listenerToRemove);
      }
    }
  }
  
  export default EventEmitter;
  