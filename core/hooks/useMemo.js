function useMemo(factory, deps) {
    const component = currentComponent;
    const index = component.hookIndex++;
    const hasChanged = component.hooks[index]
        ? !deps.every((dep, i) => dep === component.hooks[index][1][i])
        : true;
    if (hasChanged) {
        component.hooks[index] = [factory(), deps];
    }
    return component.hooks[index][0];
}

export { useMemo };