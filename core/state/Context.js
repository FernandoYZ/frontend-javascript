class Context {
    constructor(defaultValue) {
        this.value = defaultValue;
        this.listeners = [];
    }

    provide(value) {
        this.value = value;
        this.listeners.forEach(listener => listener(value));
    }

    subscribe(listener) {
        this.listeners.push(listener);
        return () => {
            this.listeners = this.listeners.filter(l => l !== listener);
        };
    }

    getValue() {
        return this.value;
    }
}

export default Context;