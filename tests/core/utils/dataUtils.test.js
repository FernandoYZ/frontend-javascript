import { deepClone, deepMerge } from '../../../core/utils/dataUtils';

// Prueba de deepClone
test('deepClone should deeply clone an object', () => {
    const obj = { a: 1, b: { c: 2 } };
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
    expect(clonedObj.b).not.toBe(obj.b);
});

// Prueba de deepMerge
test('deepMerge should deeply merge two objects', () => {
    const target = { a: 1, b: { c: 2 } };
    const source = { b: { d: 3 }, e: 4 };
    const mergedObj = deepMerge(target, source);
    expect(mergedObj).toEqual({ a: 1, b: { c: 2, d: 3 }, e: 4 });
});
