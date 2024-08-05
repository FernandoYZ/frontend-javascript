import { deepClone, deepMerge } from '../../../core/utils/dataUtils';

describe('dataUtils', function(){
    it('deepClone debería clonar profundamente un objeto', function(){
        const obj = { a: 1, b: { c: 2 } };
        const clonedObj = deepClone(obj);
        expect(clonedObj).toEqual(obj);
        expect(clonedObj).not.toBe(obj);
        expect(clonedObj.b).not.toBe(obj.b);
    });

    it('deepMerge debería fusionar profundamente dos objetos', function(){
        const target = { a: 1, b: { c: 2 } };
        const source = { b: { d: 3 }, e: 4 };
        const mergedObj = deepMerge(target, source);
        expect(mergedObj).toEqual({ a: 1, b: { c: 2, d: 3 }, e: 4 });
    });
});
