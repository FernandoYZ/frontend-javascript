export function useState(initialState) {
    const component = currentComponent;
    const [state, setState] = component.stateHook(initialState);
    return [state, setState];
}