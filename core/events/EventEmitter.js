class EventEmitter {
  constructor() {
      this.events = new Map();
      this.queue = [];
  }

  on(event, listener) {
      if (!this.events.has(event)) {
          this.events.set(event, []);
      }
      this.events.get(event).push(listener);
  }

  emit(event, ...args) {
      if (this.events.has(event)) {
          this.queue.push({ event, args });
          if (this.queue.length === 1) {
              this._processQueue();
          }
      }
  }

  off(event, listenerToRemove) {
      if (this.events.has(event)) {
          const listeners = this.events.get(event).filter(listener => listener !== listenerToRemove);
          if (listeners.length > 0) {
              this.events.set(event, listeners);
          } else {
              this.events.delete(event);
          }
      }
  }

  _processQueue() {
      while (this.queue.length > 0) {
          const { event, args } = this.queue.shift();
          this.events.get(event).forEach(listener => listener(...args));
      }
  }
}

export default EventEmitter;
