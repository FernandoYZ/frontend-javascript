import _ from '../../libs/lodash.min.js';

function deepClone(obj) {
    return _.cloneDeep(obj);
}

function deepMerge(target, source) {
    return _.merge({}, target, source);
}

export { deepClone, deepMerge };
