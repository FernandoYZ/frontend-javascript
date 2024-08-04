class EventEmitter {
    constructor() {
        this.events = new Map();
        this.queue = [];
        this.debounceTimers = new Map();
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

    emitDebounced(event, ...args) {
        if (this.events.has(event)) {
            if (this.debounceTimers.has(event)) {
                clearTimeout(this.debounceTimers.get(event));
            }
            this.debounceTimers.set(event, setTimeout(() => {
                this.emit(event, ...args);
                this.debounceTimers.delete(event);
            }, 300)); // Ajusta el tiempo de debounce según sea necesario
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