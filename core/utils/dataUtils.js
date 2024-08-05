import _ from '../../libs/lodash.min.js';

/**
 * Clona profundamente un objeto.
 * @param {Object} obj - El objeto a clonar.
 * @returns {Object} - El objeto clonado.
 */
function deepClone(obj) {
    return _.cloneDeep(obj);
}

/**
 * Fusiona profundamente dos objetos.
 * @param {Object} target - El objeto objetivo.
 * @param {Object} source - El objeto fuente.
 * @returns {Object} - El objeto fusionado.
 */
function deepMerge(target, source) {
    return _.merge({}, target, source);
}

export { deepClone, deepMerge };
