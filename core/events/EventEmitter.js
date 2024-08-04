class EventEmitter {
  constructor() {
      this.events = new Map();
  }

  on(event, listener) {
      if (!this.events.has(event)) {
          this.events.set(event, []);
      }
      this.events.get(event).push(listener);
  }

  emit(event, ...args) {
      if (this.events.has(event)) {
          this.events.get(event).forEach(listener => listener(...args));
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
}

export default EventEmitter;
