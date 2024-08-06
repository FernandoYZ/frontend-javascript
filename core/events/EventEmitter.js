class EventEmitter {
    constructor() {
        this.events = new Map();
        this.queue = [];
        this.debounceTimers = new Map();
    }

    /**
     * Registra un listener para un evento específico.
     * @param {string} event - El evento al que escuchar.
     * @param {function} listener - La función callback.
     * @throws {TypeError} Si el listener no es una función.
     */
    on(event, listener) {
        if (typeof listener !== 'function') {
            throw new TypeError('El listener debe ser una función');
        }
        if (!this.events.has(event)) {
            this.events.set(event, new Set());
        }
        this.events.get(event).add(listener);
    }    

    /**
     * Emite un evento, activando todos los listeners asociados.
     * @param {string} event - El evento a emitir.
     * @param {...any} args - Argumentos a pasar a las funciones listener.
     */
    emit(event, ...args) {
        if (this.events.has(event)) {
            this.queue.push({ event, args });
            if (this.queue.length === 1) {
                this._processQueue();
            }
        } else {
            console.warn(`No hay listeners para el evento: ${event}`);
        }
    }

    /**
     * Emite un evento con un retraso de debounce.
     * @param {string} event - El evento a emitir.
     * @param {number} [debounceTime=300] - El tiempo de debounce en milisegundos.
     * @param {...any} args - Argumentos a pasar a las funciones listener.
     * @throws {TypeError} Si el tiempo de debounce no es un número positivo.
     */
    emitDebounced(event, debounceTime = 300, ...args) {
        if (typeof debounceTime !== 'number' || debounceTime <= 0 || isNaN(debounceTime)) {
            throw new TypeError('El tiempo de debounce debe ser un número positivo.');
        }
        if (this.events.has(event)) {
            if (this.debounceTimers.has(event)) {
                clearTimeout(this.debounceTimers.get(event));
            }
            this.debounceTimers.set(event, setTimeout(() => {
                this.emit(event, ...args);
                this.debounceTimers.delete(event);
            }, debounceTime));
        } else {
            console.warn(`No hay listeners para el evento: ${event}`);
        }
    }

    /**
     * Elimina un listener específico para un evento dado.
     * @param {string} event - El evento del que eliminar el listener.
     * @param {function} listenerToRemove - El listener a eliminar.
     */
    off(event, listenerToRemove) {
        if (this.events.has(event)) {
            const listeners = this.events.get(event);
            listeners.delete(listenerToRemove);

            if (listeners.size === 0) {
                this.events.delete(event);
            }
        } else {
            console.warn(`No hay listeners para eliminar para el evento: ${event}`);
        }
    }

    /**
     * Procesa la cola de eventos, activando los listeners para cada evento.
     * @private
     */
    _processQueue() {
        const batchSize = Math.min(this.queue.length, 50); // Ajusta el tamaño del lote según el rendimiento
        let processed = 0;
    
        const processBatch = () => {
            while (processed < batchSize && this.queue.length > 0) {
                const { event, args } = this.queue.shift();
                if (this.events.has(event)) {
                    try {
                        this.events.get(event).forEach(listener => listener(...args));
                    } catch (error) {
                        console.error(`Error al procesar el evento: ${event}`, error);
                    }
                }
                processed++;
            } if (this.queue.length > 1000) {
                console.warn('El tamaño de la cola excede el límite, considera optimizar el manejo de eventos.');
            } if (this.queue.length > 0) {
                requestAnimationFrame(processBatch);
            }
        };
    
        requestAnimationFrame(processBatch);
    }
                
}

export default EventEmitter;